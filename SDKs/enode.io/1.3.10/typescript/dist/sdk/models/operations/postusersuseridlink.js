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
exports.PostUsersUseridLinkResponse = exports.PostUsersUseridLinkRequest = exports.PostUsersUseridLink200ApplicationJson = exports.PostUsersUseridLinkSecurity = exports.PostUsersUseridLinkRequestBody = exports.PostUsersUseridLinkRequestBodyVendorEnum = exports.PostUsersUseridLinkPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostUsersUseridLinkPathParams = /** @class */ (function (_super) {
    __extends(PostUsersUseridLinkPathParams, _super);
    function PostUsersUseridLinkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PostUsersUseridLinkPathParams.prototype, "userId", void 0);
    return PostUsersUseridLinkPathParams;
}(utils_1.SpeakeasyBase));
exports.PostUsersUseridLinkPathParams = PostUsersUseridLinkPathParams;
var PostUsersUseridLinkRequestBodyVendorEnum;
(function (PostUsersUseridLinkRequestBodyVendorEnum) {
    PostUsersUseridLinkRequestBodyVendorEnum["Tesla"] = "TESLA";
    PostUsersUseridLinkRequestBodyVendorEnum["Bmw"] = "BMW";
    PostUsersUseridLinkRequestBodyVendorEnum["Audi"] = "AUDI";
    PostUsersUseridLinkRequestBodyVendorEnum["Volkswagen"] = "VOLKSWAGEN";
    PostUsersUseridLinkRequestBodyVendorEnum["Hyundai"] = "HYUNDAI";
    PostUsersUseridLinkRequestBodyVendorEnum["Peugeot"] = "PEUGEOT";
    PostUsersUseridLinkRequestBodyVendorEnum["Nissan"] = "NISSAN";
})(PostUsersUseridLinkRequestBodyVendorEnum = exports.PostUsersUseridLinkRequestBodyVendorEnum || (exports.PostUsersUseridLinkRequestBodyVendorEnum = {}));
var PostUsersUseridLinkRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersUseridLinkRequestBody, _super);
    function PostUsersUseridLinkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forceLanguage" }),
        __metadata("design:type", String)
    ], PostUsersUseridLinkRequestBody.prototype, "forceLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=linkMultiple" }),
        __metadata("design:type", Boolean)
    ], PostUsersUseridLinkRequestBody.prototype, "linkMultiple", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userImage" }),
        __metadata("design:type", String)
    ], PostUsersUseridLinkRequestBody.prototype, "userImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], PostUsersUseridLinkRequestBody.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vendor" }),
        __metadata("design:type", String)
    ], PostUsersUseridLinkRequestBody.prototype, "vendor", void 0);
    return PostUsersUseridLinkRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostUsersUseridLinkRequestBody = PostUsersUseridLinkRequestBody;
var PostUsersUseridLinkSecurity = /** @class */ (function (_super) {
    __extends(PostUsersUseridLinkSecurity, _super);
    function PostUsersUseridLinkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeClientAccessToken)
    ], PostUsersUseridLinkSecurity.prototype, "clientAccessToken", void 0);
    return PostUsersUseridLinkSecurity;
}(utils_1.SpeakeasyBase));
exports.PostUsersUseridLinkSecurity = PostUsersUseridLinkSecurity;
var PostUsersUseridLink200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostUsersUseridLink200ApplicationJson, _super);
    function PostUsersUseridLink200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=linkState" }),
        __metadata("design:type", String)
    ], PostUsersUseridLink200ApplicationJson.prototype, "linkState", void 0);
    return PostUsersUseridLink200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostUsersUseridLink200ApplicationJson = PostUsersUseridLink200ApplicationJson;
var PostUsersUseridLinkRequest = /** @class */ (function (_super) {
    __extends(PostUsersUseridLinkRequest, _super);
    function PostUsersUseridLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUsersUseridLinkPathParams)
    ], PostUsersUseridLinkRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostUsersUseridLinkRequestBody)
    ], PostUsersUseridLinkRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUsersUseridLinkSecurity)
    ], PostUsersUseridLinkRequest.prototype, "security", void 0);
    return PostUsersUseridLinkRequest;
}(utils_1.SpeakeasyBase));
exports.PostUsersUseridLinkRequest = PostUsersUseridLinkRequest;
var PostUsersUseridLinkResponse = /** @class */ (function (_super) {
    __extends(PostUsersUseridLinkResponse, _super);
    function PostUsersUseridLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUsersUseridLinkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUsersUseridLinkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUsersUseridLink200ApplicationJson)
    ], PostUsersUseridLinkResponse.prototype, "postUsersUseridLink200ApplicationJSONObject", void 0);
    return PostUsersUseridLinkResponse;
}(utils_1.SpeakeasyBase));
exports.PostUsersUseridLinkResponse = PostUsersUseridLinkResponse;
