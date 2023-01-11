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
exports.UpdateVpcResponse = exports.UpdateVpcRequest = exports.UpdateVpc401ApplicationJson = exports.UpdateVpc200ApplicationJson = exports.UpdateVpcRequestBody = exports.UpdateVpcPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateVpcPathParams = /** @class */ (function (_super) {
    __extends(UpdateVpcPathParams, _super);
    function UpdateVpcPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=vpc_id" }),
        __metadata("design:type", String)
    ], UpdateVpcPathParams.prototype, "vpcId", void 0);
    return UpdateVpcPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateVpcPathParams = UpdateVpcPathParams;
var UpdateVpcRequestBody = /** @class */ (function (_super) {
    __extends(UpdateVpcRequestBody, _super);
    function UpdateVpcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], UpdateVpcRequestBody.prototype, "default", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateVpcRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateVpcRequestBody.prototype, "name", void 0);
    return UpdateVpcRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateVpcRequestBody = UpdateVpcRequestBody;
var UpdateVpc200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateVpc200ApplicationJson, _super);
    function UpdateVpc200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc" }),
        __metadata("design:type", shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems)
    ], UpdateVpc200ApplicationJson.prototype, "vpc", void 0);
    return UpdateVpc200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateVpc200ApplicationJson = UpdateVpc200ApplicationJson;
var UpdateVpc401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateVpc401ApplicationJson, _super);
    function UpdateVpc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateVpc401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateVpc401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], UpdateVpc401ApplicationJson.prototype, "requestId", void 0);
    return UpdateVpc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateVpc401ApplicationJson = UpdateVpc401ApplicationJson;
var UpdateVpcRequest = /** @class */ (function (_super) {
    __extends(UpdateVpcRequest, _super);
    function UpdateVpcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVpcPathParams)
    ], UpdateVpcRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVpcRequestBody)
    ], UpdateVpcRequest.prototype, "request", void 0);
    return UpdateVpcRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateVpcRequest = UpdateVpcRequest;
var UpdateVpcResponse = /** @class */ (function (_super) {
    __extends(UpdateVpcResponse, _super);
    function UpdateVpcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateVpcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVpcResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateVpcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVpc200ApplicationJson)
    ], UpdateVpcResponse.prototype, "updateVpc200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVpc401ApplicationJson)
    ], UpdateVpcResponse.prototype, "updateVpc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], UpdateVpcResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return UpdateVpcResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateVpcResponse = UpdateVpcResponse;
