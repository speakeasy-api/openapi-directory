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
exports.CreateDropletResponse = exports.CreateDropletRequest = exports.CreateDroplet401ApplicationJson = exports.CreateDropletRequestBodyMultipleDropletRequest = exports.CreateDropletRequestBodySingleDropletRequest = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateDropletRequestBodySingleDropletRequest = /** @class */ (function (_super) {
    __extends(CreateDropletRequestBodySingleDropletRequest, _super);
    function CreateDropletRequestBodySingleDropletRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backups" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "backups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Object)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipv6" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "ipv6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monitoring" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "monitoring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_networking" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "privateNetworking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssh_keys" }),
        __metadata("design:type", Array)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "sshKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_data" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "userData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc_uuid" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "vpcUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=with_droplet_agent" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodySingleDropletRequest.prototype, "withDropletAgent", void 0);
    return CreateDropletRequestBodySingleDropletRequest;
}(utils_1.SpeakeasyBase));
exports.CreateDropletRequestBodySingleDropletRequest = CreateDropletRequestBodySingleDropletRequest;
var CreateDropletRequestBodyMultipleDropletRequest = /** @class */ (function (_super) {
    __extends(CreateDropletRequestBodyMultipleDropletRequest, _super);
    function CreateDropletRequestBodyMultipleDropletRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backups" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "backups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Object)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipv6" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "ipv6", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monitoring" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "monitoring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names" }),
        __metadata("design:type", Array)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_networking" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "privateNetworking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssh_keys" }),
        __metadata("design:type", Array)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "sshKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_data" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "userData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc_uuid" }),
        __metadata("design:type", String)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "vpcUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=with_droplet_agent" }),
        __metadata("design:type", Boolean)
    ], CreateDropletRequestBodyMultipleDropletRequest.prototype, "withDropletAgent", void 0);
    return CreateDropletRequestBodyMultipleDropletRequest;
}(utils_1.SpeakeasyBase));
exports.CreateDropletRequestBodyMultipleDropletRequest = CreateDropletRequestBodyMultipleDropletRequest;
var CreateDroplet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDroplet401ApplicationJson, _super);
    function CreateDroplet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateDroplet401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateDroplet401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateDroplet401ApplicationJson.prototype, "requestId", void 0);
    return CreateDroplet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateDroplet401ApplicationJson = CreateDroplet401ApplicationJson;
var CreateDropletRequest = /** @class */ (function (_super) {
    __extends(CreateDropletRequest, _super);
    function CreateDropletRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateDropletRequest.prototype, "request", void 0);
    return CreateDropletRequest;
}(utils_1.SpeakeasyBase));
exports.CreateDropletRequest = CreateDropletRequest;
var CreateDropletResponse = /** @class */ (function (_super) {
    __extends(CreateDropletResponse, _super);
    function CreateDropletResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateDropletResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDropletResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateDropletResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDropletResponse.prototype, "createDroplet202ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDroplet401ApplicationJson)
    ], CreateDropletResponse.prototype, "createDroplet401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateDropletResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return CreateDropletResponse;
}(utils_1.SpeakeasyBase));
exports.CreateDropletResponse = CreateDropletResponse;
