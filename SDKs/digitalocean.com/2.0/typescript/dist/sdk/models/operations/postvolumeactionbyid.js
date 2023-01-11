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
exports.PostVolumeActionByIdResponse = exports.PostVolumeActionByIdRequest = exports.PostVolumeActionById401ApplicationJson = exports.PostVolumeActionByIdRequestBody3 = exports.PostVolumeActionByIdRequestBody3TypeEnum = exports.PostVolumeActionByIdQueryParams = exports.PostVolumeActionByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostVolumeActionByIdPathParams = /** @class */ (function (_super) {
    __extends(PostVolumeActionByIdPathParams, _super);
    function PostVolumeActionByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=volume_id" }),
        __metadata("design:type", String)
    ], PostVolumeActionByIdPathParams.prototype, "volumeId", void 0);
    return PostVolumeActionByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByIdPathParams = PostVolumeActionByIdPathParams;
var PostVolumeActionByIdQueryParams = /** @class */ (function (_super) {
    __extends(PostVolumeActionByIdQueryParams, _super);
    function PostVolumeActionByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PostVolumeActionByIdQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], PostVolumeActionByIdQueryParams.prototype, "perPage", void 0);
    return PostVolumeActionByIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByIdQueryParams = PostVolumeActionByIdQueryParams;
var PostVolumeActionByIdRequestBody3TypeEnum;
(function (PostVolumeActionByIdRequestBody3TypeEnum) {
    PostVolumeActionByIdRequestBody3TypeEnum["Attach"] = "attach";
    PostVolumeActionByIdRequestBody3TypeEnum["Detach"] = "detach";
    PostVolumeActionByIdRequestBody3TypeEnum["Resize"] = "resize";
})(PostVolumeActionByIdRequestBody3TypeEnum = exports.PostVolumeActionByIdRequestBody3TypeEnum || (exports.PostVolumeActionByIdRequestBody3TypeEnum = {}));
var PostVolumeActionByIdRequestBody3 = /** @class */ (function (_super) {
    __extends(PostVolumeActionByIdRequestBody3, _super);
    function PostVolumeActionByIdRequestBody3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PostVolumeActionByIdRequestBody3.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_gigabytes" }),
        __metadata("design:type", Number)
    ], PostVolumeActionByIdRequestBody3.prototype, "sizeGigabytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostVolumeActionByIdRequestBody3.prototype, "type", void 0);
    return PostVolumeActionByIdRequestBody3;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByIdRequestBody3 = PostVolumeActionByIdRequestBody3;
var PostVolumeActionById401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostVolumeActionById401ApplicationJson, _super);
    function PostVolumeActionById401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostVolumeActionById401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostVolumeActionById401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], PostVolumeActionById401ApplicationJson.prototype, "requestId", void 0);
    return PostVolumeActionById401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionById401ApplicationJson = PostVolumeActionById401ApplicationJson;
var PostVolumeActionByIdRequest = /** @class */ (function (_super) {
    __extends(PostVolumeActionByIdRequest, _super);
    function PostVolumeActionByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostVolumeActionByIdPathParams)
    ], PostVolumeActionByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostVolumeActionByIdQueryParams)
    ], PostVolumeActionByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostVolumeActionByIdRequest.prototype, "request", void 0);
    return PostVolumeActionByIdRequest;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByIdRequest = PostVolumeActionByIdRequest;
var PostVolumeActionByIdResponse = /** @class */ (function (_super) {
    __extends(PostVolumeActionByIdResponse, _super);
    function PostVolumeActionByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostVolumeActionByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostVolumeActionByIdResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostVolumeActionByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostVolumeActionByIdResponse.prototype, "postVolumeActionById202ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostVolumeActionById401ApplicationJson)
    ], PostVolumeActionByIdResponse.prototype, "postVolumeActionById401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], PostVolumeActionByIdResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return PostVolumeActionByIdResponse;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByIdResponse = PostVolumeActionByIdResponse;
