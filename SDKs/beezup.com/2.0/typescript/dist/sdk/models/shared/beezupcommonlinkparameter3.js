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
exports.BeezUpCommonLinkParameter3 = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommonparameterinenum_1 = require("./beezupcommonparameterinenum");
var beezupcommonlovlink3_1 = require("./beezupcommonlovlink3");
var beezupcommonlinkparameterproperty3_1 = require("./beezupcommonlinkparameterproperty3");
var beezupcommonparametertypeenum_1 = require("./beezupcommonparametertypeenum");
var BeezUpCommonLinkParameter3 = /** @class */ (function (_super) {
    __extends(BeezUpCommonLinkParameter3, _super);
    function BeezUpCommonLinkParameter3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BeezUpCommonLinkParameter3.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in" }),
        __metadata("design:type", String)
    ], BeezUpCommonLinkParameter3.prototype, "in", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], BeezUpCommonLinkParameter3.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lovLink" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], BeezUpCommonLinkParameter3.prototype, "lovLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lovRequired" }),
        __metadata("design:type", Boolean)
    ], BeezUpCommonLinkParameter3.prototype, "lovRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties", elemType: beezupcommonlinkparameterproperty3_1.BeezUpCommonLinkParameterProperty3 }),
        __metadata("design:type", Object)
    ], BeezUpCommonLinkParameter3.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], BeezUpCommonLinkParameter3.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], BeezUpCommonLinkParameter3.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BeezUpCommonLinkParameter3.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], BeezUpCommonLinkParameter3.prototype, "value", void 0);
    return BeezUpCommonLinkParameter3;
}(utils_1.SpeakeasyBase));
exports.BeezUpCommonLinkParameter3 = BeezUpCommonLinkParameter3;
