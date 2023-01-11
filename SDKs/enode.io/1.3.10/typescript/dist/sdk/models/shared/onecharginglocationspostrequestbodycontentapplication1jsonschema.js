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
exports.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput = exports.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema = void 0;
var utils_1 = require("../../../internal/utils");
var OnechargingLocationsPostRequestBodyContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(OnechargingLocationsPostRequestBodyContentApplication1jsonSchema, _super);
    function OnechargingLocationsPostRequestBodyContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OnechargingLocationsPostRequestBodyContentApplication1jsonSchema.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], OnechargingLocationsPostRequestBodyContentApplication1jsonSchema.prototype, "latitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], OnechargingLocationsPostRequestBodyContentApplication1jsonSchema.prototype, "longitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnechargingLocationsPostRequestBodyContentApplication1jsonSchema.prototype, "name", void 0);
    return OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
}(utils_1.SpeakeasyBase));
exports.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema = OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
var OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput = /** @class */ (function (_super) {
    __extends(OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput, _super);
    function OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput.prototype, "latitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput.prototype, "longitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput.prototype, "name", void 0);
    return OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput;
}(utils_1.SpeakeasyBase));
exports.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput = OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput;
