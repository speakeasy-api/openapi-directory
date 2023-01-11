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
exports.WebhookTriggers = exports.WebhookTriggersShares = exports.WebhookTriggersResources = void 0;
var utils_1 = require("../../../internal/utils");
var WebhookTriggersResources = /** @class */ (function (_super) {
    __extends(WebhookTriggersResources, _super);
    function WebhookTriggersResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compress" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "compress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copy" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "copy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createFolder" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "createFolder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extract" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "extract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=move" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "move", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rename" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "rename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersResources.prototype, "upload", void 0);
    return WebhookTriggersResources;
}(utils_1.SpeakeasyBase));
exports.WebhookTriggersResources = WebhookTriggersResources;
var WebhookTriggersShares = /** @class */ (function (_super) {
    __extends(WebhookTriggersShares, _super);
    function WebhookTriggersShares() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formSubmit" }),
        __metadata("design:type", Boolean)
    ], WebhookTriggersShares.prototype, "formSubmit", void 0);
    return WebhookTriggersShares;
}(utils_1.SpeakeasyBase));
exports.WebhookTriggersShares = WebhookTriggersShares;
var WebhookTriggers = /** @class */ (function (_super) {
    __extends(WebhookTriggers, _super);
    function WebhookTriggers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources" }),
        __metadata("design:type", WebhookTriggersResources)
    ], WebhookTriggers.prototype, "resources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shares" }),
        __metadata("design:type", WebhookTriggersShares)
    ], WebhookTriggers.prototype, "shares", void 0);
    return WebhookTriggers;
}(utils_1.SpeakeasyBase));
exports.WebhookTriggers = WebhookTriggers;
