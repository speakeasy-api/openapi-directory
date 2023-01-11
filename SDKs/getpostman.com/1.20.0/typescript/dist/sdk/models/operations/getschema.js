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
exports.GetSchemaResponse = exports.GetSchemaRequest = exports.GetSchema200ApplicationJson = exports.GetSchema200ApplicationJsonSchema = exports.GetSchemaPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetSchemaPathParams = /** @class */ (function (_super) {
    __extends(GetSchemaPathParams, _super);
    function GetSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], GetSchemaPathParams.prototype, "apiId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=apiVersionId" }),
        __metadata("design:type", String)
    ], GetSchemaPathParams.prototype, "apiVersionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=schemaId" }),
        __metadata("design:type", String)
    ], GetSchemaPathParams.prototype, "schemaId", void 0);
    return GetSchemaPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSchemaPathParams = GetSchemaPathParams;
var GetSchema200ApplicationJsonSchema = /** @class */ (function (_super) {
    __extends(GetSchema200ApplicationJsonSchema, _super);
    function GetSchema200ApplicationJsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiVersion" }),
        __metadata("design:type", String)
    ], GetSchema200ApplicationJsonSchema.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GetSchema200ApplicationJsonSchema.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], GetSchema200ApplicationJsonSchema.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSchema200ApplicationJsonSchema.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], GetSchema200ApplicationJsonSchema.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetSchema200ApplicationJsonSchema.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateBy" }),
        __metadata("design:type", String)
    ], GetSchema200ApplicationJsonSchema.prototype, "updateBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", String)
    ], GetSchema200ApplicationJsonSchema.prototype, "updatedAt", void 0);
    return GetSchema200ApplicationJsonSchema;
}(utils_1.SpeakeasyBase));
exports.GetSchema200ApplicationJsonSchema = GetSchema200ApplicationJsonSchema;
var GetSchema200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSchema200ApplicationJson, _super);
    function GetSchema200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", GetSchema200ApplicationJsonSchema)
    ], GetSchema200ApplicationJson.prototype, "schema", void 0);
    return GetSchema200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSchema200ApplicationJson = GetSchema200ApplicationJson;
var GetSchemaRequest = /** @class */ (function (_super) {
    __extends(GetSchemaRequest, _super);
    function GetSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSchemaPathParams)
    ], GetSchemaRequest.prototype, "pathParams", void 0);
    return GetSchemaRequest;
}(utils_1.SpeakeasyBase));
exports.GetSchemaRequest = GetSchemaRequest;
var GetSchemaResponse = /** @class */ (function (_super) {
    __extends(GetSchemaResponse, _super);
    function GetSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSchemaResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSchema200ApplicationJson)
    ], GetSchemaResponse.prototype, "getSchema200ApplicationJSONObject", void 0);
    return GetSchemaResponse;
}(utils_1.SpeakeasyBase));
exports.GetSchemaResponse = GetSchemaResponse;
