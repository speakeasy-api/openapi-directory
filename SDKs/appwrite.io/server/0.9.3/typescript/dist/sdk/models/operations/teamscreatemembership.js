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
exports.TeamsCreateMembershipResponse = exports.TeamsCreateMembershipRequest = exports.TeamsCreateMembershipSecurity = exports.TeamsCreateMembershipRequestBody = exports.TeamsCreateMembershipPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TeamsCreateMembershipPathParams = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipPathParams, _super);
    function TeamsCreateMembershipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], TeamsCreateMembershipPathParams.prototype, "teamId", void 0);
    return TeamsCreateMembershipPathParams;
}(utils_1.SpeakeasyBase));
exports.TeamsCreateMembershipPathParams = TeamsCreateMembershipPathParams;
var TeamsCreateMembershipRequestBody = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipRequestBody, _super);
    function TeamsCreateMembershipRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], TeamsCreateMembershipRequestBody.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TeamsCreateMembershipRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roles" }),
        __metadata("design:type", Array)
    ], TeamsCreateMembershipRequestBody.prototype, "roles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TeamsCreateMembershipRequestBody.prototype, "url", void 0);
    return TeamsCreateMembershipRequestBody;
}(utils_1.SpeakeasyBase));
exports.TeamsCreateMembershipRequestBody = TeamsCreateMembershipRequestBody;
var TeamsCreateMembershipSecurity = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipSecurity, _super);
    function TeamsCreateMembershipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], TeamsCreateMembershipSecurity.prototype, "jwt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], TeamsCreateMembershipSecurity.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], TeamsCreateMembershipSecurity.prototype, "project", void 0);
    return TeamsCreateMembershipSecurity;
}(utils_1.SpeakeasyBase));
exports.TeamsCreateMembershipSecurity = TeamsCreateMembershipSecurity;
var TeamsCreateMembershipRequest = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipRequest, _super);
    function TeamsCreateMembershipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsCreateMembershipPathParams)
    ], TeamsCreateMembershipRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsCreateMembershipRequestBody)
    ], TeamsCreateMembershipRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsCreateMembershipSecurity)
    ], TeamsCreateMembershipRequest.prototype, "security", void 0);
    return TeamsCreateMembershipRequest;
}(utils_1.SpeakeasyBase));
exports.TeamsCreateMembershipRequest = TeamsCreateMembershipRequest;
var TeamsCreateMembershipResponse = /** @class */ (function (_super) {
    __extends(TeamsCreateMembershipResponse, _super);
    function TeamsCreateMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TeamsCreateMembershipResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TeamsCreateMembershipResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Membership)
    ], TeamsCreateMembershipResponse.prototype, "membership", void 0);
    return TeamsCreateMembershipResponse;
}(utils_1.SpeakeasyBase));
exports.TeamsCreateMembershipResponse = TeamsCreateMembershipResponse;
