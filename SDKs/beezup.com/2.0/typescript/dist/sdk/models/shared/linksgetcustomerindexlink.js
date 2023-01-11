"use strict";
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
exports.LinksGetCustomerIndexLink = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommoninfosummaries_1 = require("./beezupcommoninfosummaries");
var beezupcommonhttpmethodenum_1 = require("./beezupcommonhttpmethodenum");
var beezupcommonlinkparameter3_1 = require("./beezupcommonlinkparameter3");
var LinksGetCustomerIndexLink = /** @class */ (function (_super) {
    __extends(LinksGetCustomerIndexLink, _super);
    function LinksGetCustomerIndexLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allOptionalParamsProvided" }),
        __metadata("design:type", Boolean)
    ], LinksGetCustomerIndexLink.prototype, "allOptionalParamsProvided", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allRequiredParamsProvided" }),
        __metadata("design:type", Boolean)
    ], LinksGetCustomerIndexLink.prototype, "allRequiredParamsProvided", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LinksGetCustomerIndexLink.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=docUrl" }),
        __metadata("design:type", String)
    ], LinksGetCustomerIndexLink.prototype, "docUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], LinksGetCustomerIndexLink.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=info" }),
        __metadata("design:type", beezupcommoninfosummaries_1.BeezUpCommonInfoSummaries)
    ], LinksGetCustomerIndexLink.prototype, "info", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LinksGetCustomerIndexLink.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], LinksGetCustomerIndexLink.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operationId" }),
        __metadata("design:type", String)
    ], LinksGetCustomerIndexLink.prototype, "operationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters", elemType: beezupcommonlinkparameter3_1.BeezUpCommonLinkParameter3 }),
        __metadata("design:type", Object)
    ], LinksGetCustomerIndexLink.prototype, "parameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlTemplated" }),
        __metadata("design:type", Boolean)
    ], LinksGetCustomerIndexLink.prototype, "urlTemplated", void 0);
    return LinksGetCustomerIndexLink;
}(utils_1.SpeakeasyBase));
exports.LinksGetCustomerIndexLink = LinksGetCustomerIndexLink;
