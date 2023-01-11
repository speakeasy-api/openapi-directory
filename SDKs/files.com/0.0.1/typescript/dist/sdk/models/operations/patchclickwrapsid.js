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
exports.PatchClickwrapsIdResponse = exports.PatchClickwrapsIdRequest = exports.PatchClickwrapsIdRequestBody = exports.PatchClickwrapsIdRequestBodyUseWithUsersEnum = exports.PatchClickwrapsIdRequestBodyUseWithInboxesEnum = exports.PatchClickwrapsIdRequestBodyUseWithBundlesEnum = exports.PatchClickwrapsIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchClickwrapsIdPathParams = /** @class */ (function (_super) {
    __extends(PatchClickwrapsIdPathParams, _super);
    function PatchClickwrapsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchClickwrapsIdPathParams.prototype, "id", void 0);
    return PatchClickwrapsIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchClickwrapsIdPathParams = PatchClickwrapsIdPathParams;
var PatchClickwrapsIdRequestBodyUseWithBundlesEnum;
(function (PatchClickwrapsIdRequestBodyUseWithBundlesEnum) {
    PatchClickwrapsIdRequestBodyUseWithBundlesEnum["None"] = "none";
    PatchClickwrapsIdRequestBodyUseWithBundlesEnum["Available"] = "available";
    PatchClickwrapsIdRequestBodyUseWithBundlesEnum["Require"] = "require";
})(PatchClickwrapsIdRequestBodyUseWithBundlesEnum = exports.PatchClickwrapsIdRequestBodyUseWithBundlesEnum || (exports.PatchClickwrapsIdRequestBodyUseWithBundlesEnum = {}));
var PatchClickwrapsIdRequestBodyUseWithInboxesEnum;
(function (PatchClickwrapsIdRequestBodyUseWithInboxesEnum) {
    PatchClickwrapsIdRequestBodyUseWithInboxesEnum["None"] = "none";
    PatchClickwrapsIdRequestBodyUseWithInboxesEnum["Available"] = "available";
    PatchClickwrapsIdRequestBodyUseWithInboxesEnum["Require"] = "require";
})(PatchClickwrapsIdRequestBodyUseWithInboxesEnum = exports.PatchClickwrapsIdRequestBodyUseWithInboxesEnum || (exports.PatchClickwrapsIdRequestBodyUseWithInboxesEnum = {}));
var PatchClickwrapsIdRequestBodyUseWithUsersEnum;
(function (PatchClickwrapsIdRequestBodyUseWithUsersEnum) {
    PatchClickwrapsIdRequestBodyUseWithUsersEnum["None"] = "none";
    PatchClickwrapsIdRequestBodyUseWithUsersEnum["Require"] = "require";
})(PatchClickwrapsIdRequestBodyUseWithUsersEnum = exports.PatchClickwrapsIdRequestBodyUseWithUsersEnum || (exports.PatchClickwrapsIdRequestBodyUseWithUsersEnum = {}));
var PatchClickwrapsIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchClickwrapsIdRequestBody, _super);
    function PatchClickwrapsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=body" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=use_with_bundles" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "useWithBundles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=use_with_inboxes" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "useWithInboxes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=use_with_users" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "useWithUsers", void 0);
    return PatchClickwrapsIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchClickwrapsIdRequestBody = PatchClickwrapsIdRequestBody;
var PatchClickwrapsIdRequest = /** @class */ (function (_super) {
    __extends(PatchClickwrapsIdRequest, _super);
    function PatchClickwrapsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchClickwrapsIdPathParams)
    ], PatchClickwrapsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchClickwrapsIdRequestBody)
    ], PatchClickwrapsIdRequest.prototype, "request", void 0);
    return PatchClickwrapsIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchClickwrapsIdRequest = PatchClickwrapsIdRequest;
var PatchClickwrapsIdResponse = /** @class */ (function (_super) {
    __extends(PatchClickwrapsIdResponse, _super);
    function PatchClickwrapsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ClickwrapEntity)
    ], PatchClickwrapsIdResponse.prototype, "clickwrapEntity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchClickwrapsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchClickwrapsIdResponse.prototype, "statusCode", void 0);
    return PatchClickwrapsIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchClickwrapsIdResponse = PatchClickwrapsIdResponse;
