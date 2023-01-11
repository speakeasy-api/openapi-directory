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
exports.AddConnectionPoolResponse = exports.AddConnectionPoolRequest = exports.AddConnectionPool401ApplicationJson = exports.AddConnectionPool201ApplicationJson = exports.AddConnectionPoolPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddConnectionPoolPathParams = /** @class */ (function (_super) {
    __extends(AddConnectionPoolPathParams, _super);
    function AddConnectionPoolPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" }),
        __metadata("design:type", String)
    ], AddConnectionPoolPathParams.prototype, "databaseClusterUuid", void 0);
    return AddConnectionPoolPathParams;
}(utils_1.SpeakeasyBase));
exports.AddConnectionPoolPathParams = AddConnectionPoolPathParams;
var AddConnectionPool201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddConnectionPool201ApplicationJson, _super);
    function AddConnectionPool201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pool" }),
        __metadata("design:type", shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1)
    ], AddConnectionPool201ApplicationJson.prototype, "pool", void 0);
    return AddConnectionPool201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddConnectionPool201ApplicationJson = AddConnectionPool201ApplicationJson;
var AddConnectionPool401ApplicationJson = /** @class */ (function (_super) {
    __extends(AddConnectionPool401ApplicationJson, _super);
    function AddConnectionPool401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddConnectionPool401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AddConnectionPool401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], AddConnectionPool401ApplicationJson.prototype, "requestId", void 0);
    return AddConnectionPool401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddConnectionPool401ApplicationJson = AddConnectionPool401ApplicationJson;
var AddConnectionPoolRequest = /** @class */ (function (_super) {
    __extends(AddConnectionPoolRequest, _super);
    function AddConnectionPoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddConnectionPoolPathParams)
    ], AddConnectionPoolRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems)
    ], AddConnectionPoolRequest.prototype, "request", void 0);
    return AddConnectionPoolRequest;
}(utils_1.SpeakeasyBase));
exports.AddConnectionPoolRequest = AddConnectionPoolRequest;
var AddConnectionPoolResponse = /** @class */ (function (_super) {
    __extends(AddConnectionPoolResponse, _super);
    function AddConnectionPoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddConnectionPoolResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AddConnectionPoolResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddConnectionPoolResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddConnectionPool201ApplicationJson)
    ], AddConnectionPoolResponse.prototype, "addConnectionPool201ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddConnectionPool401ApplicationJson)
    ], AddConnectionPoolResponse.prototype, "addConnectionPool401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], AddConnectionPoolResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return AddConnectionPoolResponse;
}(utils_1.SpeakeasyBase));
exports.AddConnectionPoolResponse = AddConnectionPoolResponse;
