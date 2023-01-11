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
exports.Finding = void 0;
var utils_1 = require("../../../internal/utils");
var assetattributes_1 = require("./assetattributes");
var assettypeenum_1 = require("./assettypeenum");
var attribute_1 = require("./attribute");
var inspectorserviceattributes_1 = require("./inspectorserviceattributes");
var severityenum_1 = require("./severityenum");
// Finding
/**
 * Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
**/
var Finding = /** @class */ (function (_super) {
    __extends(Finding, _super);
    function Finding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Finding.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetAttributes" }),
        __metadata("design:type", assetattributes_1.AssetAttributes)
    ], Finding.prototype, "assetAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetType" }),
        __metadata("design:type", String)
    ], Finding.prototype, "assetType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes", elemType: attribute_1.Attribute }),
        __metadata("design:type", Array)
    ], Finding.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], Finding.prototype, "confidence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Finding.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Finding.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Finding.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=indicatorOfCompromise" }),
        __metadata("design:type", Boolean)
    ], Finding.prototype, "indicatorOfCompromise", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numericSeverity" }),
        __metadata("design:type", Number)
    ], Finding.prototype, "numericSeverity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendation" }),
        __metadata("design:type", String)
    ], Finding.prototype, "recommendation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemaVersion" }),
        __metadata("design:type", Number)
    ], Finding.prototype, "schemaVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], Finding.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAttributes" }),
        __metadata("design:type", inspectorserviceattributes_1.InspectorServiceAttributes)
    ], Finding.prototype, "serviceAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], Finding.prototype, "severity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Finding.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Finding.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userAttributes", elemType: attribute_1.Attribute }),
        __metadata("design:type", Array)
    ], Finding.prototype, "userAttributes", void 0);
    return Finding;
}(utils_1.SpeakeasyBase));
exports.Finding = Finding;
