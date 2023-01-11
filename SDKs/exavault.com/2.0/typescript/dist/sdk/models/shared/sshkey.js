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
exports.SshKey = exports.SshKeyTypeEnum = exports.SshKeyRelationships = exports.SshKeyRelationshipsOwnerUser = exports.SshKeyRelationshipsOwnerUserData = void 0;
var utils_1 = require("../../../internal/utils");
var sshkeyattributes_1 = require("./sshkeyattributes");
var SshKeyRelationshipsOwnerUserData = /** @class */ (function (_super) {
    __extends(SshKeyRelationshipsOwnerUserData, _super);
    function SshKeyRelationshipsOwnerUserData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SshKeyRelationshipsOwnerUserData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SshKeyRelationshipsOwnerUserData.prototype, "type", void 0);
    return SshKeyRelationshipsOwnerUserData;
}(utils_1.SpeakeasyBase));
exports.SshKeyRelationshipsOwnerUserData = SshKeyRelationshipsOwnerUserData;
var SshKeyRelationshipsOwnerUser = /** @class */ (function (_super) {
    __extends(SshKeyRelationshipsOwnerUser, _super);
    function SshKeyRelationshipsOwnerUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", SshKeyRelationshipsOwnerUserData)
    ], SshKeyRelationshipsOwnerUser.prototype, "data", void 0);
    return SshKeyRelationshipsOwnerUser;
}(utils_1.SpeakeasyBase));
exports.SshKeyRelationshipsOwnerUser = SshKeyRelationshipsOwnerUser;
var SshKeyRelationships = /** @class */ (function (_super) {
    __extends(SshKeyRelationships, _super);
    function SshKeyRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerUser" }),
        __metadata("design:type", SshKeyRelationshipsOwnerUser)
    ], SshKeyRelationships.prototype, "ownerUser", void 0);
    return SshKeyRelationships;
}(utils_1.SpeakeasyBase));
exports.SshKeyRelationships = SshKeyRelationships;
var SshKeyTypeEnum;
(function (SshKeyTypeEnum) {
    SshKeyTypeEnum["SshKey"] = "sshKey";
})(SshKeyTypeEnum = exports.SshKeyTypeEnum || (exports.SshKeyTypeEnum = {}));
// SshKey
/**
 * Object representing an SSH Key associated with a user.
**/
var SshKey = /** @class */ (function (_super) {
    __extends(SshKey, _super);
    function SshKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", sshkeyattributes_1.SshKeyAttributes)
    ], SshKey.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SshKey.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", SshKeyRelationships)
    ], SshKey.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SshKey.prototype, "type", void 0);
    return SshKey;
}(utils_1.SpeakeasyBase));
exports.SshKey = SshKey;
