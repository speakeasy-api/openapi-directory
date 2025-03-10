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
exports.GetActivitiesResponse = void 0;
var utils_1 = require("../../../internal/utils");
var activity_1 = require("./activity");
var links_1 = require("./links");
var meta_1 = require("./meta");
var GetActivitiesResponse = /** @class */ (function (_super) {
    __extends(GetActivitiesResponse, _super);
    function GetActivitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: activity_1.Activity }),
        __metadata("design:type", Array)
    ], GetActivitiesResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", links_1.Links)
    ], GetActivitiesResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", meta_1.Meta)
    ], GetActivitiesResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], GetActivitiesResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], GetActivitiesResponse.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], GetActivitiesResponse.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetActivitiesResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_code" }),
        __metadata("design:type", Number)
    ], GetActivitiesResponse.prototype, "statusCode", void 0);
    return GetActivitiesResponse;
}(utils_1.SpeakeasyBase));
exports.GetActivitiesResponse = GetActivitiesResponse;
