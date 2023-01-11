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
exports.ResetAuthResponse = exports.ResetAuthRequest = exports.ResetAuth401ApplicationJson = exports.ResetAuth200ApplicationJson = exports.ResetAuthRequestBody = exports.ResetAuthPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ResetAuthPathParams = /** @class */ (function (_super) {
    __extends(ResetAuthPathParams, _super);
    function ResetAuthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" }),
        __metadata("design:type", String)
    ], ResetAuthPathParams.prototype, "databaseClusterUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], ResetAuthPathParams.prototype, "username", void 0);
    return ResetAuthPathParams;
}(utils_1.SpeakeasyBase));
exports.ResetAuthPathParams = ResetAuthPathParams;
var ResetAuthRequestBody = /** @class */ (function (_super) {
    __extends(ResetAuthRequestBody, _super);
    function ResetAuthRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mysql_settings" }),
        __metadata("design:type", shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings)
    ], ResetAuthRequestBody.prototype, "mysqlSettings", void 0);
    return ResetAuthRequestBody;
}(utils_1.SpeakeasyBase));
exports.ResetAuthRequestBody = ResetAuthRequestBody;
var ResetAuth200ApplicationJson = /** @class */ (function (_super) {
    __extends(ResetAuth200ApplicationJson, _super);
    function ResetAuth200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems)
    ], ResetAuth200ApplicationJson.prototype, "user", void 0);
    return ResetAuth200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ResetAuth200ApplicationJson = ResetAuth200ApplicationJson;
var ResetAuth401ApplicationJson = /** @class */ (function (_super) {
    __extends(ResetAuth401ApplicationJson, _super);
    function ResetAuth401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ResetAuth401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ResetAuth401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ResetAuth401ApplicationJson.prototype, "requestId", void 0);
    return ResetAuth401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ResetAuth401ApplicationJson = ResetAuth401ApplicationJson;
var ResetAuthRequest = /** @class */ (function (_super) {
    __extends(ResetAuthRequest, _super);
    function ResetAuthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ResetAuthPathParams)
    ], ResetAuthRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ResetAuthRequestBody)
    ], ResetAuthRequest.prototype, "request", void 0);
    return ResetAuthRequest;
}(utils_1.SpeakeasyBase));
exports.ResetAuthRequest = ResetAuthRequest;
var ResetAuthResponse = /** @class */ (function (_super) {
    __extends(ResetAuthResponse, _super);
    function ResetAuthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ResetAuthResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ResetAuthResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ResetAuthResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ResetAuth200ApplicationJson)
    ], ResetAuthResponse.prototype, "resetAuth200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ResetAuth401ApplicationJson)
    ], ResetAuthResponse.prototype, "resetAuth401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ResetAuthResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ResetAuthResponse;
}(utils_1.SpeakeasyBase));
exports.ResetAuthResponse = ResetAuthResponse;
