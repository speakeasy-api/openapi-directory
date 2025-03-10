"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchProvisionedProductsInput = void 0;
var utils_1 = require("../../../internal/utils");
var accesslevelfilter_1 = require("./accesslevelfilter");
var sortorderenum_1 = require("./sortorderenum");
var class_transformer_1 = require("class-transformer");
var SearchProvisionedProductsInput = /** @class */ (function (_super) {
    __extends(SearchProvisionedProductsInput, _super);
    function SearchProvisionedProductsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AcceptLanguage" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsInput.prototype, "acceptLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AccessLevelFilter" }),
        (0, class_transformer_1.Type)(function () { return accesslevelfilter_1.AccessLevelFilter; }),
        __metadata("design:type", accesslevelfilter_1.AccessLevelFilter)
    ], SearchProvisionedProductsInput.prototype, "accessLevelFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Filters" }),
        __metadata("design:type", Object)
    ], SearchProvisionedProductsInput.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PageSize" }),
        __metadata("design:type", Number)
    ], SearchProvisionedProductsInput.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PageToken" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsInput.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SortBy" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsInput.prototype, "sortBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SortOrder" }),
        __metadata("design:type", String)
    ], SearchProvisionedProductsInput.prototype, "sortOrder", void 0);
    return SearchProvisionedProductsInput;
}(utils_1.SpeakeasyBase));
exports.SearchProvisionedProductsInput = SearchProvisionedProductsInput;
