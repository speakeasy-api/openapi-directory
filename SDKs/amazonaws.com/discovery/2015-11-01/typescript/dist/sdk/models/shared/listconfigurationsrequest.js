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
exports.ListConfigurationsRequest = void 0;
var utils_1 = require("../../../internal/utils");
var configurationitemtypeenum_1 = require("./configurationitemtypeenum");
var filter_1 = require("./filter");
var orderbyelement_1 = require("./orderbyelement");
var ListConfigurationsRequest = /** @class */ (function (_super) {
    __extends(ListConfigurationsRequest, _super);
    function ListConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configurationType" }),
        __metadata("design:type", String)
    ], ListConfigurationsRequest.prototype, "configurationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filters", elemType: filter_1.Filter }),
        __metadata("design:type", Array)
    ], ListConfigurationsRequest.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListConfigurationsRequest.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListConfigurationsRequest.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderBy", elemType: orderbyelement_1.OrderByElement }),
        __metadata("design:type", Array)
    ], ListConfigurationsRequest.prototype, "orderBy", void 0);
    return ListConfigurationsRequest;
}(utils_1.SpeakeasyBase));
exports.ListConfigurationsRequest = ListConfigurationsRequest;
