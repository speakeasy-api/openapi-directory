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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScimUser = exports.ScimUserOperations = exports.ScimUserOperationsOpEnum = exports.ScimUserName = exports.ScimUserMeta = exports.ScimUserEmails = void 0;
var utils_1 = require("../../../internal/utils");
var ScimUserEmails = /** @class */ (function (_super) {
    __extends(ScimUserEmails, _super);
    function ScimUserEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], ScimUserEmails.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ScimUserEmails.prototype, "value", void 0);
    return ScimUserEmails;
}(utils_1.SpeakeasyBase));
exports.ScimUserEmails = ScimUserEmails;
var ScimUserMeta = /** @class */ (function (_super) {
    __extends(ScimUserMeta, _super);
    function ScimUserMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], ScimUserMeta.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastModified" }),
        __metadata("design:type", Date)
    ], ScimUserMeta.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ScimUserMeta.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], ScimUserMeta.prototype, "resourceType", void 0);
    return ScimUserMeta;
}(utils_1.SpeakeasyBase));
exports.ScimUserMeta = ScimUserMeta;
var ScimUserName = /** @class */ (function (_super) {
    __extends(ScimUserName, _super);
    function ScimUserName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], ScimUserName.prototype, "familyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formatted" }),
        __metadata("design:type", String)
    ], ScimUserName.prototype, "formatted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], ScimUserName.prototype, "givenName", void 0);
    return ScimUserName;
}(utils_1.SpeakeasyBase));
exports.ScimUserName = ScimUserName;
var ScimUserOperationsOpEnum;
(function (ScimUserOperationsOpEnum) {
    ScimUserOperationsOpEnum["Add"] = "add";
    ScimUserOperationsOpEnum["Remove"] = "remove";
    ScimUserOperationsOpEnum["Replace"] = "replace";
})(ScimUserOperationsOpEnum = exports.ScimUserOperationsOpEnum || (exports.ScimUserOperationsOpEnum = {}));
var ScimUserOperations = /** @class */ (function (_super) {
    __extends(ScimUserOperations, _super);
    function ScimUserOperations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], ScimUserOperations.prototype, "op", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ScimUserOperations.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], ScimUserOperations.prototype, "value", void 0);
    return ScimUserOperations;
}(utils_1.SpeakeasyBase));
exports.ScimUserOperations = ScimUserOperations;
// ScimUser
/**
 * SCIM /Users provisioning endpoints
**/
var ScimUser = /** @class */ (function (_super) {
    __extends(ScimUser, _super);
    function ScimUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ScimUser.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ScimUser.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emails", elemType: ScimUserEmails }),
        __metadata("design:type", Array)
    ], ScimUser.prototype, "emails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], ScimUser.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], ScimUser.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScimUser.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ScimUserMeta)
    ], ScimUser.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", ScimUserName)
    ], ScimUser.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operations", elemType: ScimUserOperations }),
        __metadata("design:type", Array)
    ], ScimUser.prototype, "operations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization_id" }),
        __metadata("design:type", Number)
    ], ScimUser.prototype, "organizationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], ScimUser.prototype, "schemas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], ScimUser.prototype, "userName", void 0);
    return ScimUser;
}(utils_1.SpeakeasyBase));
exports.ScimUser = ScimUser;
