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
exports.PostFloatingIpActionResponse = exports.PostFloatingIpActionRequest = exports.PostFloatingIpAction401ApplicationJson = exports.PostFloatingIpActionRequestBody2 = exports.PostFloatingIpActionRequestBody2TypeEnum = exports.PostFloatingIpActionRequestBody1 = exports.PostFloatingIpActionRequestBody1TypeEnum = exports.PostFloatingIpActionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostFloatingIpActionPathParams = /** @class */ (function (_super) {
    __extends(PostFloatingIpActionPathParams, _super);
    function PostFloatingIpActionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=floating_ip" }),
        __metadata("design:type", String)
    ], PostFloatingIpActionPathParams.prototype, "floatingIp", void 0);
    return PostFloatingIpActionPathParams;
}(utils_1.SpeakeasyBase));
exports.PostFloatingIpActionPathParams = PostFloatingIpActionPathParams;
var PostFloatingIpActionRequestBody1TypeEnum;
(function (PostFloatingIpActionRequestBody1TypeEnum) {
    PostFloatingIpActionRequestBody1TypeEnum["Assign"] = "assign";
    PostFloatingIpActionRequestBody1TypeEnum["Unassign"] = "unassign";
})(PostFloatingIpActionRequestBody1TypeEnum = exports.PostFloatingIpActionRequestBody1TypeEnum || (exports.PostFloatingIpActionRequestBody1TypeEnum = {}));
var PostFloatingIpActionRequestBody1 = /** @class */ (function (_super) {
    __extends(PostFloatingIpActionRequestBody1, _super);
    function PostFloatingIpActionRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIpActionRequestBody1.prototype, "type", void 0);
    return PostFloatingIpActionRequestBody1;
}(utils_1.SpeakeasyBase));
exports.PostFloatingIpActionRequestBody1 = PostFloatingIpActionRequestBody1;
var PostFloatingIpActionRequestBody2TypeEnum;
(function (PostFloatingIpActionRequestBody2TypeEnum) {
    PostFloatingIpActionRequestBody2TypeEnum["Assign"] = "assign";
    PostFloatingIpActionRequestBody2TypeEnum["Unassign"] = "unassign";
})(PostFloatingIpActionRequestBody2TypeEnum = exports.PostFloatingIpActionRequestBody2TypeEnum || (exports.PostFloatingIpActionRequestBody2TypeEnum = {}));
var PostFloatingIpActionRequestBody2 = /** @class */ (function (_super) {
    __extends(PostFloatingIpActionRequestBody2, _super);
    function PostFloatingIpActionRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpActionRequestBody2.prototype, "dropletId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIpActionRequestBody2.prototype, "type", void 0);
    return PostFloatingIpActionRequestBody2;
}(utils_1.SpeakeasyBase));
exports.PostFloatingIpActionRequestBody2 = PostFloatingIpActionRequestBody2;
var PostFloatingIpAction401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostFloatingIpAction401ApplicationJson, _super);
    function PostFloatingIpAction401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostFloatingIpAction401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFloatingIpAction401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], PostFloatingIpAction401ApplicationJson.prototype, "requestId", void 0);
    return PostFloatingIpAction401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostFloatingIpAction401ApplicationJson = PostFloatingIpAction401ApplicationJson;
var PostFloatingIpActionRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpActionRequest, _super);
    function PostFloatingIpActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostFloatingIpActionPathParams)
    ], PostFloatingIpActionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostFloatingIpActionRequest.prototype, "request", void 0);
    return PostFloatingIpActionRequest;
}(utils_1.SpeakeasyBase));
exports.PostFloatingIpActionRequest = PostFloatingIpActionRequest;
var PostFloatingIpActionResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpActionResponse, _super);
    function PostFloatingIpActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostFloatingIpActionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostFloatingIpActionResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostFloatingIpActionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostFloatingIpActionResponse.prototype, "postFloatingIpAction201ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostFloatingIpAction401ApplicationJson)
    ], PostFloatingIpActionResponse.prototype, "postFloatingIpAction401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], PostFloatingIpActionResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return PostFloatingIpActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostFloatingIpActionResponse = PostFloatingIpActionResponse;
