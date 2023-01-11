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
exports.Webhook = exports.WebhookRelationships = exports.WebhookRelationshipsResource = exports.WebhookRelationshipsResourceData = exports.WebhookRelationshipsOwnerAccount = exports.WebhookRelationshipsOwnerAccountData = void 0;
var utils_1 = require("../../../internal/utils");
var webhookattributes_1 = require("./webhookattributes");
var WebhookRelationshipsOwnerAccountData = /** @class */ (function (_super) {
    __extends(WebhookRelationshipsOwnerAccountData, _super);
    function WebhookRelationshipsOwnerAccountData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], WebhookRelationshipsOwnerAccountData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookRelationshipsOwnerAccountData.prototype, "type", void 0);
    return WebhookRelationshipsOwnerAccountData;
}(utils_1.SpeakeasyBase));
exports.WebhookRelationshipsOwnerAccountData = WebhookRelationshipsOwnerAccountData;
var WebhookRelationshipsOwnerAccount = /** @class */ (function (_super) {
    __extends(WebhookRelationshipsOwnerAccount, _super);
    function WebhookRelationshipsOwnerAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", WebhookRelationshipsOwnerAccountData)
    ], WebhookRelationshipsOwnerAccount.prototype, "data", void 0);
    return WebhookRelationshipsOwnerAccount;
}(utils_1.SpeakeasyBase));
exports.WebhookRelationshipsOwnerAccount = WebhookRelationshipsOwnerAccount;
var WebhookRelationshipsResourceData = /** @class */ (function (_super) {
    __extends(WebhookRelationshipsResourceData, _super);
    function WebhookRelationshipsResourceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], WebhookRelationshipsResourceData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WebhookRelationshipsResourceData.prototype, "type", void 0);
    return WebhookRelationshipsResourceData;
}(utils_1.SpeakeasyBase));
exports.WebhookRelationshipsResourceData = WebhookRelationshipsResourceData;
var WebhookRelationshipsResource = /** @class */ (function (_super) {
    __extends(WebhookRelationshipsResource, _super);
    function WebhookRelationshipsResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", WebhookRelationshipsResourceData)
    ], WebhookRelationshipsResource.prototype, "data", void 0);
    return WebhookRelationshipsResource;
}(utils_1.SpeakeasyBase));
exports.WebhookRelationshipsResource = WebhookRelationshipsResource;
var WebhookRelationships = /** @class */ (function (_super) {
    __extends(WebhookRelationships, _super);
    function WebhookRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerAccount" }),
        __metadata("design:type", WebhookRelationshipsOwnerAccount)
    ], WebhookRelationships.prototype, "ownerAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource" }),
        __metadata("design:type", WebhookRelationshipsResource)
    ], WebhookRelationships.prototype, "resource", void 0);
    return WebhookRelationships;
}(utils_1.SpeakeasyBase));
exports.WebhookRelationships = WebhookRelationships;
var Webhook = /** @class */ (function (_super) {
    __extends(Webhook, _super);
    function Webhook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", webhookattributes_1.WebhookAttributes)
    ], Webhook.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Webhook.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", WebhookRelationships)
    ], Webhook.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Webhook.prototype, "type", void 0);
    return Webhook;
}(utils_1.SpeakeasyBase));
exports.Webhook = Webhook;
