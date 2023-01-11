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
exports.GetClusterlintResultsResponse = exports.GetClusterlintResultsRequest = exports.GetClusterlintResults401ApplicationJson = exports.GetClusterlintResults200ApplicationJson = exports.GetClusterlintResults200ApplicationJsonDiagnostics = exports.GetClusterlintResults200ApplicationJsonDiagnosticsObject = exports.GetClusterlintResultsQueryParams = exports.GetClusterlintResultsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetClusterlintResultsPathParams = /** @class */ (function (_super) {
    __extends(GetClusterlintResultsPathParams, _super);
    function GetClusterlintResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cluster_id" }),
        __metadata("design:type", String)
    ], GetClusterlintResultsPathParams.prototype, "clusterId", void 0);
    return GetClusterlintResultsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetClusterlintResultsPathParams = GetClusterlintResultsPathParams;
var GetClusterlintResultsQueryParams = /** @class */ (function (_super) {
    __extends(GetClusterlintResultsQueryParams, _super);
    function GetClusterlintResultsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=run_id" }),
        __metadata("design:type", String)
    ], GetClusterlintResultsQueryParams.prototype, "runId", void 0);
    return GetClusterlintResultsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetClusterlintResultsQueryParams = GetClusterlintResultsQueryParams;
// GetClusterlintResults200ApplicationJsonDiagnosticsObject
/**
 * Metadata about the Kubernetes API object the diagnostic is reported on.
**/
var GetClusterlintResults200ApplicationJsonDiagnosticsObject = /** @class */ (function (_super) {
    __extends(GetClusterlintResults200ApplicationJsonDiagnosticsObject, _super);
    function GetClusterlintResults200ApplicationJsonDiagnosticsObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], GetClusterlintResults200ApplicationJsonDiagnosticsObject.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetClusterlintResults200ApplicationJsonDiagnosticsObject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], GetClusterlintResults200ApplicationJsonDiagnosticsObject.prototype, "namespace", void 0);
    return GetClusterlintResults200ApplicationJsonDiagnosticsObject;
}(utils_1.SpeakeasyBase));
exports.GetClusterlintResults200ApplicationJsonDiagnosticsObject = GetClusterlintResults200ApplicationJsonDiagnosticsObject;
var GetClusterlintResults200ApplicationJsonDiagnostics = /** @class */ (function (_super) {
    __extends(GetClusterlintResults200ApplicationJsonDiagnostics, _super);
    function GetClusterlintResults200ApplicationJsonDiagnostics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=check_name" }),
        __metadata("design:type", String)
    ], GetClusterlintResults200ApplicationJsonDiagnostics.prototype, "checkName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetClusterlintResults200ApplicationJsonDiagnostics.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", GetClusterlintResults200ApplicationJsonDiagnosticsObject)
    ], GetClusterlintResults200ApplicationJsonDiagnostics.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], GetClusterlintResults200ApplicationJsonDiagnostics.prototype, "severity", void 0);
    return GetClusterlintResults200ApplicationJsonDiagnostics;
}(utils_1.SpeakeasyBase));
exports.GetClusterlintResults200ApplicationJsonDiagnostics = GetClusterlintResults200ApplicationJsonDiagnostics;
var GetClusterlintResults200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetClusterlintResults200ApplicationJson, _super);
    function GetClusterlintResults200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], GetClusterlintResults200ApplicationJson.prototype, "completedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diagnostics", elemType: GetClusterlintResults200ApplicationJsonDiagnostics }),
        __metadata("design:type", Array)
    ], GetClusterlintResults200ApplicationJson.prototype, "diagnostics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requested_at" }),
        __metadata("design:type", Date)
    ], GetClusterlintResults200ApplicationJson.prototype, "requestedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=run_id" }),
        __metadata("design:type", String)
    ], GetClusterlintResults200ApplicationJson.prototype, "runId", void 0);
    return GetClusterlintResults200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetClusterlintResults200ApplicationJson = GetClusterlintResults200ApplicationJson;
var GetClusterlintResults401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetClusterlintResults401ApplicationJson, _super);
    function GetClusterlintResults401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetClusterlintResults401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetClusterlintResults401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetClusterlintResults401ApplicationJson.prototype, "requestId", void 0);
    return GetClusterlintResults401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetClusterlintResults401ApplicationJson = GetClusterlintResults401ApplicationJson;
var GetClusterlintResultsRequest = /** @class */ (function (_super) {
    __extends(GetClusterlintResultsRequest, _super);
    function GetClusterlintResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClusterlintResultsPathParams)
    ], GetClusterlintResultsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClusterlintResultsQueryParams)
    ], GetClusterlintResultsRequest.prototype, "queryParams", void 0);
    return GetClusterlintResultsRequest;
}(utils_1.SpeakeasyBase));
exports.GetClusterlintResultsRequest = GetClusterlintResultsRequest;
var GetClusterlintResultsResponse = /** @class */ (function (_super) {
    __extends(GetClusterlintResultsResponse, _super);
    function GetClusterlintResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetClusterlintResultsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetClusterlintResultsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetClusterlintResultsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClusterlintResults200ApplicationJson)
    ], GetClusterlintResultsResponse.prototype, "getClusterlintResults200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClusterlintResults401ApplicationJson)
    ], GetClusterlintResultsResponse.prototype, "getClusterlintResults401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetClusterlintResultsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetClusterlintResultsResponse;
}(utils_1.SpeakeasyBase));
exports.GetClusterlintResultsResponse = GetClusterlintResultsResponse;
