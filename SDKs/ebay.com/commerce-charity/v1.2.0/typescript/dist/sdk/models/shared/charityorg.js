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
exports.CharityOrg = void 0;
var utils_1 = require("../../../internal/utils");
var location_1 = require("./location");
var image_1 = require("./image");
// CharityOrg
/**
 * The full location, ID, logo and other details of the charity organization.
**/
var CharityOrg = /** @class */ (function (_super) {
    __extends(CharityOrg, _super);
    function CharityOrg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charityOrgId" }),
        __metadata("design:type", String)
    ], CharityOrg.prototype, "charityOrgId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CharityOrg.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", location_1.Location)
    ], CharityOrg.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logoImage" }),
        __metadata("design:type", image_1.Image)
    ], CharityOrg.prototype, "logoImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=missionStatement" }),
        __metadata("design:type", String)
    ], CharityOrg.prototype, "missionStatement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CharityOrg.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrationId" }),
        __metadata("design:type", String)
    ], CharityOrg.prototype, "registrationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], CharityOrg.prototype, "website", void 0);
    return CharityOrg;
}(utils_1.SpeakeasyBase));
exports.CharityOrg = CharityOrg;
