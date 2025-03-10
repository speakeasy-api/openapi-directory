"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.RepositoryAssociation = void 0;
var utils_1 = require("../../../internal/utils");
var kmskeydetails_1 = require("./kmskeydetails");
var providertypeenum_1 = require("./providertypeenum");
var repositoryassociationstateenum_1 = require("./repositoryassociationstateenum");
var s3repositorydetails_1 = require("./s3repositorydetails");
var class_transformer_1 = require("class-transformer");
/**
 * Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">DescribeRepositoryAssociation</a> operation returns a <code>RepositoryAssociation</code> object.
 */
var RepositoryAssociation = /** @class */ (function (_super) {
    __extends(RepositoryAssociation, _super);
    function RepositoryAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AssociationArn" }),
        __metadata("design:type", String)
    ], RepositoryAssociation.prototype, "associationArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AssociationId" }),
        __metadata("design:type", String)
    ], RepositoryAssociation.prototype, "associationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ConnectionArn" }),
        __metadata("design:type", String)
    ], RepositoryAssociation.prototype, "connectionArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CreatedTimeStamp" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], RepositoryAssociation.prototype, "createdTimeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "KMSKeyDetails" }),
        (0, class_transformer_1.Type)(function () { return kmskeydetails_1.KMSKeyDetails; }),
        __metadata("design:type", kmskeydetails_1.KMSKeyDetails)
    ], RepositoryAssociation.prototype, "kmsKeyDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "LastUpdatedTimeStamp" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], RepositoryAssociation.prototype, "lastUpdatedTimeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Name" }),
        __metadata("design:type", String)
    ], RepositoryAssociation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Owner" }),
        __metadata("design:type", String)
    ], RepositoryAssociation.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ProviderType" }),
        __metadata("design:type", String)
    ], RepositoryAssociation.prototype, "providerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "S3RepositoryDetails" }),
        (0, class_transformer_1.Type)(function () { return s3repositorydetails_1.S3RepositoryDetails; }),
        __metadata("design:type", s3repositorydetails_1.S3RepositoryDetails)
    ], RepositoryAssociation.prototype, "s3RepositoryDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "State" }),
        __metadata("design:type", String)
    ], RepositoryAssociation.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "StateReason" }),
        __metadata("design:type", String)
    ], RepositoryAssociation.prototype, "stateReason", void 0);
    return RepositoryAssociation;
}(utils_1.SpeakeasyBase));
exports.RepositoryAssociation = RepositoryAssociation;
