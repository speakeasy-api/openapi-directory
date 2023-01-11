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
exports.TeamsAddOrUpdateMembershipForUserLegacyResponse = exports.TeamsAddOrUpdateMembershipForUserLegacyRequest = exports.TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson = exports.TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors = exports.TeamsAddOrUpdateMembershipForUserLegacyRequestBody = exports.TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum = exports.TeamsAddOrUpdateMembershipForUserLegacyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TeamsAddOrUpdateMembershipForUserLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserLegacyPathParams, _super);
    function TeamsAddOrUpdateMembershipForUserLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateMembershipForUserLegacyPathParams.prototype, "teamId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserLegacyPathParams.prototype, "username", void 0);
    return TeamsAddOrUpdateMembershipForUserLegacyPathParams;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateMembershipForUserLegacyPathParams = TeamsAddOrUpdateMembershipForUserLegacyPathParams;
var TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum;
(function (TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum) {
    TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum["Member"] = "member";
    TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum["Maintainer"] = "maintainer";
})(TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum = exports.TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum || (exports.TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum = {}));
var TeamsAddOrUpdateMembershipForUserLegacyRequestBody = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserLegacyRequestBody, _super);
    function TeamsAddOrUpdateMembershipForUserLegacyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserLegacyRequestBody.prototype, "role", void 0);
    return TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateMembershipForUserLegacyRequestBody = TeamsAddOrUpdateMembershipForUserLegacyRequestBody;
var TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors, _super);
    function TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors.prototype, "resource", void 0);
    return TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors = TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors;
var TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson, _super);
    function TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson.prototype, "message", void 0);
    return TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson = TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson;
var TeamsAddOrUpdateMembershipForUserLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserLegacyRequest, _super);
    function TeamsAddOrUpdateMembershipForUserLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsAddOrUpdateMembershipForUserLegacyPathParams)
    ], TeamsAddOrUpdateMembershipForUserLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsAddOrUpdateMembershipForUserLegacyRequestBody)
    ], TeamsAddOrUpdateMembershipForUserLegacyRequest.prototype, "request", void 0);
    return TeamsAddOrUpdateMembershipForUserLegacyRequest;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateMembershipForUserLegacyRequest = TeamsAddOrUpdateMembershipForUserLegacyRequest;
var TeamsAddOrUpdateMembershipForUserLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateMembershipForUserLegacyResponse, _super);
    function TeamsAddOrUpdateMembershipForUserLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateMembershipForUserLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateMembershipForUserLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], TeamsAddOrUpdateMembershipForUserLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TeamMembership)
    ], TeamsAddOrUpdateMembershipForUserLegacyResponse.prototype, "teamMembership", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJson)
    ], TeamsAddOrUpdateMembershipForUserLegacyResponse.prototype, "teamsAddOrUpdateMembershipForUserLegacy422ApplicationJSONObject", void 0);
    return TeamsAddOrUpdateMembershipForUserLegacyResponse;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateMembershipForUserLegacyResponse = TeamsAddOrUpdateMembershipForUserLegacyResponse;
