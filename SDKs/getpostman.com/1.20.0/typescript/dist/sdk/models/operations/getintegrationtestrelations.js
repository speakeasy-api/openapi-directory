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
exports.GetIntegrationTestRelationsResponse = exports.GetIntegrationTestRelationsRequest = exports.GetIntegrationTestRelations200ApplicationJson = exports.GetIntegrationTestRelations200ApplicationJsonIntegrationtest = exports.GetIntegrationTestRelationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetIntegrationTestRelationsPathParams = /** @class */ (function (_super) {
    __extends(GetIntegrationTestRelationsPathParams, _super);
    function GetIntegrationTestRelationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetIntegrationTestRelationsPathParams.prototype, "apiId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], GetIntegrationTestRelationsPathParams.prototype, "apiVersionId", void 0);
    return GetIntegrationTestRelationsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationTestRelationsPathParams = GetIntegrationTestRelationsPathParams;
var GetIntegrationTestRelations200ApplicationJsonIntegrationtest = /** @class */ (function (_super) {
    __extends(GetIntegrationTestRelations200ApplicationJsonIntegrationtest, _super);
    function GetIntegrationTestRelations200ApplicationJsonIntegrationtest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collectionId" }),
        __metadata("design:type", String)
    ], GetIntegrationTestRelations200ApplicationJsonIntegrationtest.prototype, "collectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetIntegrationTestRelations200ApplicationJsonIntegrationtest.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetIntegrationTestRelations200ApplicationJsonIntegrationtest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetIntegrationTestRelations200ApplicationJsonIntegrationtest.prototype, "updatedAt", void 0);
    return GetIntegrationTestRelations200ApplicationJsonIntegrationtest;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationTestRelations200ApplicationJsonIntegrationtest = GetIntegrationTestRelations200ApplicationJsonIntegrationtest;
var GetIntegrationTestRelations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIntegrationTestRelations200ApplicationJson, _super);
    function GetIntegrationTestRelations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrationtest", elemType: GetIntegrationTestRelations200ApplicationJsonIntegrationtest }),
        __metadata("design:type", Array)
    ], GetIntegrationTestRelations200ApplicationJson.prototype, "integrationtest", void 0);
    return GetIntegrationTestRelations200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationTestRelations200ApplicationJson = GetIntegrationTestRelations200ApplicationJson;
var GetIntegrationTestRelationsRequest = /** @class */ (function (_super) {
    __extends(GetIntegrationTestRelationsRequest, _super);
    function GetIntegrationTestRelationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationTestRelationsPathParams)
    ], GetIntegrationTestRelationsRequest.prototype, "pathParams", void 0);
    return GetIntegrationTestRelationsRequest;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationTestRelationsRequest = GetIntegrationTestRelationsRequest;
var GetIntegrationTestRelationsResponse = /** @class */ (function (_super) {
    __extends(GetIntegrationTestRelationsResponse, _super);
    function GetIntegrationTestRelationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetIntegrationTestRelationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetIntegrationTestRelationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetIntegrationTestRelations200ApplicationJson)
    ], GetIntegrationTestRelationsResponse.prototype, "getIntegrationTestRelations200ApplicationJSONObject", void 0);
    return GetIntegrationTestRelationsResponse;
}(utils_1.SpeakeasyBase));
exports.GetIntegrationTestRelationsResponse = GetIntegrationTestRelationsResponse;
