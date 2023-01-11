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
exports.Blueprint = void 0;
var utils_1 = require("../../../internal/utils");
var instanceplatformenum_1 = require("./instanceplatformenum");
var blueprinttypeenum_1 = require("./blueprinttypeenum");
// Blueprint
/**
 * Describes a blueprint (a virtual private server image).
**/
var Blueprint = /** @class */ (function (_super) {
    __extends(Blueprint, _super);
    function Blueprint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blueprintId" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "blueprintId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], Blueprint.prototype, "isActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=licenseUrl" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "licenseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minPower" }),
        __metadata("design:type", Number)
    ], Blueprint.prototype, "minPower", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productUrl" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "productUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=versionCode" }),
        __metadata("design:type", String)
    ], Blueprint.prototype, "versionCode", void 0);
    return Blueprint;
}(utils_1.SpeakeasyBase));
exports.Blueprint = Blueprint;
