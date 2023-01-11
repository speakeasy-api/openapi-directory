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
exports.ListConnectionPoolsResponse = exports.ListConnectionPoolsRequest = exports.ListConnectionPools401ApplicationJson = exports.ListConnectionPools200ApplicationJson = exports.ListConnectionPools200ApplicationJsonPools = exports.ListConnectionPools200ApplicationJsonPoolsPrivateConnection = exports.ListConnectionPools200ApplicationJsonPoolsConnection = exports.ListConnectionPoolsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListConnectionPoolsPathParams = /** @class */ (function (_super) {
    __extends(ListConnectionPoolsPathParams, _super);
    function ListConnectionPoolsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" }),
        __metadata("design:type", String)
    ], ListConnectionPoolsPathParams.prototype, "databaseClusterUuid", void 0);
    return ListConnectionPoolsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPoolsPathParams = ListConnectionPoolsPathParams;
var ListConnectionPools200ApplicationJsonPoolsConnection = /** @class */ (function (_super) {
    __extends(ListConnectionPools200ApplicationJsonPoolsConnection, _super);
    function ListConnectionPools200ApplicationJsonPoolsConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsConnection.prototype, "database", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsConnection.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsConnection.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], ListConnectionPools200ApplicationJsonPoolsConnection.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssl" }),
        __metadata("design:type", Boolean)
    ], ListConnectionPools200ApplicationJsonPoolsConnection.prototype, "ssl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsConnection.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsConnection.prototype, "user", void 0);
    return ListConnectionPools200ApplicationJsonPoolsConnection;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPools200ApplicationJsonPoolsConnection = ListConnectionPools200ApplicationJsonPoolsConnection;
var ListConnectionPools200ApplicationJsonPoolsPrivateConnection = /** @class */ (function (_super) {
    __extends(ListConnectionPools200ApplicationJsonPoolsPrivateConnection, _super);
    function ListConnectionPools200ApplicationJsonPoolsPrivateConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsPrivateConnection.prototype, "database", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsPrivateConnection.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsPrivateConnection.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], ListConnectionPools200ApplicationJsonPoolsPrivateConnection.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssl" }),
        __metadata("design:type", Boolean)
    ], ListConnectionPools200ApplicationJsonPoolsPrivateConnection.prototype, "ssl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsPrivateConnection.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPoolsPrivateConnection.prototype, "user", void 0);
    return ListConnectionPools200ApplicationJsonPoolsPrivateConnection;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPools200ApplicationJsonPoolsPrivateConnection = ListConnectionPools200ApplicationJsonPoolsPrivateConnection;
var ListConnectionPools200ApplicationJsonPools = /** @class */ (function (_super) {
    __extends(ListConnectionPools200ApplicationJsonPools, _super);
    function ListConnectionPools200ApplicationJsonPools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection" }),
        __metadata("design:type", ListConnectionPools200ApplicationJsonPoolsConnection)
    ], ListConnectionPools200ApplicationJsonPools.prototype, "connection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=db" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPools.prototype, "db", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPools.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPools.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_connection" }),
        __metadata("design:type", ListConnectionPools200ApplicationJsonPoolsPrivateConnection)
    ], ListConnectionPools200ApplicationJsonPools.prototype, "privateConnection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ListConnectionPools200ApplicationJsonPools.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ListConnectionPools200ApplicationJsonPools.prototype, "user", void 0);
    return ListConnectionPools200ApplicationJsonPools;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPools200ApplicationJsonPools = ListConnectionPools200ApplicationJsonPools;
var ListConnectionPools200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListConnectionPools200ApplicationJson, _super);
    function ListConnectionPools200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pools", elemType: ListConnectionPools200ApplicationJsonPools }),
        __metadata("design:type", Array)
    ], ListConnectionPools200ApplicationJson.prototype, "pools", void 0);
    return ListConnectionPools200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPools200ApplicationJson = ListConnectionPools200ApplicationJson;
var ListConnectionPools401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListConnectionPools401ApplicationJson, _super);
    function ListConnectionPools401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListConnectionPools401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListConnectionPools401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListConnectionPools401ApplicationJson.prototype, "requestId", void 0);
    return ListConnectionPools401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPools401ApplicationJson = ListConnectionPools401ApplicationJson;
var ListConnectionPoolsRequest = /** @class */ (function (_super) {
    __extends(ListConnectionPoolsRequest, _super);
    function ListConnectionPoolsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectionPoolsPathParams)
    ], ListConnectionPoolsRequest.prototype, "pathParams", void 0);
    return ListConnectionPoolsRequest;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPoolsRequest = ListConnectionPoolsRequest;
var ListConnectionPoolsResponse = /** @class */ (function (_super) {
    __extends(ListConnectionPoolsResponse, _super);
    function ListConnectionPoolsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListConnectionPoolsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListConnectionPoolsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListConnectionPoolsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectionPools200ApplicationJson)
    ], ListConnectionPoolsResponse.prototype, "listConnectionPools200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListConnectionPools401ApplicationJson)
    ], ListConnectionPoolsResponse.prototype, "listConnectionPools401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListConnectionPoolsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListConnectionPoolsResponse;
}(utils_1.SpeakeasyBase));
exports.ListConnectionPoolsResponse = ListConnectionPoolsResponse;
