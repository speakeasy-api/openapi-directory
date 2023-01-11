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
exports.PatchVpcResponse = exports.PatchVpcRequest = exports.PatchVpc401ApplicationJson = exports.PatchVpc200ApplicationJson = exports.PatchVpcRequestBody = exports.PatchVpcPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchVpcPathParams = /** @class */ (function (_super) {
    __extends(PatchVpcPathParams, _super);
    function PatchVpcPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=vpc_id" }),
        __metadata("design:type", String)
    ], PatchVpcPathParams.prototype, "vpcId", void 0);
    return PatchVpcPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchVpcPathParams = PatchVpcPathParams;
var PatchVpcRequestBody = /** @class */ (function (_super) {
    __extends(PatchVpcRequestBody, _super);
    function PatchVpcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], PatchVpcRequestBody.prototype, "default", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PatchVpcRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatchVpcRequestBody.prototype, "name", void 0);
    return PatchVpcRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchVpcRequestBody = PatchVpcRequestBody;
var PatchVpc200ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchVpc200ApplicationJson, _super);
    function PatchVpc200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc" }),
        __metadata("design:type", shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems)
    ], PatchVpc200ApplicationJson.prototype, "vpc", void 0);
    return PatchVpc200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchVpc200ApplicationJson = PatchVpc200ApplicationJson;
var PatchVpc401ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchVpc401ApplicationJson, _super);
    function PatchVpc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PatchVpc401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PatchVpc401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], PatchVpc401ApplicationJson.prototype, "requestId", void 0);
    return PatchVpc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchVpc401ApplicationJson = PatchVpc401ApplicationJson;
var PatchVpcRequest = /** @class */ (function (_super) {
    __extends(PatchVpcRequest, _super);
    function PatchVpcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchVpcPathParams)
    ], PatchVpcRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchVpcRequestBody)
    ], PatchVpcRequest.prototype, "request", void 0);
    return PatchVpcRequest;
}(utils_1.SpeakeasyBase));
exports.PatchVpcRequest = PatchVpcRequest;
var PatchVpcResponse = /** @class */ (function (_super) {
    __extends(PatchVpcResponse, _super);
    function PatchVpcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchVpcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PatchVpcResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchVpcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchVpc200ApplicationJson)
    ], PatchVpcResponse.prototype, "patchVpc200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchVpc401ApplicationJson)
    ], PatchVpcResponse.prototype, "patchVpc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], PatchVpcResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return PatchVpcResponse;
}(utils_1.SpeakeasyBase));
exports.PatchVpcResponse = PatchVpcResponse;
