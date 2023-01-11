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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConnectionPoolResponse = exports.GetConnectionPoolRequest = exports.GetConnectionPool401ApplicationJson = exports.GetConnectionPool200ApplicationJson = exports.GetConnectionPoolPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetConnectionPoolPathParams = /** @class */ (function (_super) {
    __extends(GetConnectionPoolPathParams, _super);
    function GetConnectionPoolPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" }),
        __metadata("design:type", String)
    ], GetConnectionPoolPathParams.prototype, "databaseClusterUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pool_name" }),
        __metadata("design:type", String)
    ], GetConnectionPoolPathParams.prototype, "poolName", void 0);
    return GetConnectionPoolPathParams;
}(utils_1.SpeakeasyBase));
exports.GetConnectionPoolPathParams = GetConnectionPoolPathParams;
var GetConnectionPool200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetConnectionPool200ApplicationJson, _super);
    function GetConnectionPool200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pool" }),
        __metadata("design:type", shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1)
    ], GetConnectionPool200ApplicationJson.prototype, "pool", void 0);
    return GetConnectionPool200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetConnectionPool200ApplicationJson = GetConnectionPool200ApplicationJson;
var GetConnectionPool401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetConnectionPool401ApplicationJson, _super);
    function GetConnectionPool401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetConnectionPool401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetConnectionPool401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetConnectionPool401ApplicationJson.prototype, "requestId", void 0);
    return GetConnectionPool401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetConnectionPool401ApplicationJson = GetConnectionPool401ApplicationJson;
var GetConnectionPoolRequest = /** @class */ (function (_super) {
    __extends(GetConnectionPoolRequest, _super);
    function GetConnectionPoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConnectionPoolPathParams)
    ], GetConnectionPoolRequest.prototype, "pathParams", void 0);
    return GetConnectionPoolRequest;
}(utils_1.SpeakeasyBase));
exports.GetConnectionPoolRequest = GetConnectionPoolRequest;
var GetConnectionPoolResponse = /** @class */ (function (_super) {
    __extends(GetConnectionPoolResponse, _super);
    function GetConnectionPoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetConnectionPoolResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetConnectionPoolResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetConnectionPoolResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConnectionPool200ApplicationJson)
    ], GetConnectionPoolResponse.prototype, "getConnectionPool200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetConnectionPool401ApplicationJson)
    ], GetConnectionPoolResponse.prototype, "getConnectionPool401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetConnectionPoolResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetConnectionPoolResponse;
}(utils_1.SpeakeasyBase));
exports.GetConnectionPoolResponse = GetConnectionPoolResponse;
