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
exports.ResourceCollaborator = void 0;
var utils_1 = require("../../../internal/utils");
var group_1 = require("./group");
var userpublic_1 = require("./userpublic");
// ResourceCollaborator
/**
 * The rights of the current user on a score or collection
**/
var ResourceCollaborator = /** @class */ (function (_super) {
    __extends(ResourceCollaborator, _super);
    function ResourceCollaborator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aclAdmin" }),
        __metadata("design:type", Boolean)
    ], ResourceCollaborator.prototype, "aclAdmin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aclRead" }),
        __metadata("design:type", Boolean)
    ], ResourceCollaborator.prototype, "aclRead", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aclWrite" }),
        __metadata("design:type", Boolean)
    ], ResourceCollaborator.prototype, "aclWrite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collection" }),
        __metadata("design:type", String)
    ], ResourceCollaborator.prototype, "collection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group" }),
        __metadata("design:type", group_1.Group)
    ], ResourceCollaborator.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ResourceCollaborator.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invited" }),
        __metadata("design:type", Boolean)
    ], ResourceCollaborator.prototype, "invited", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCollaborator" }),
        __metadata("design:type", Boolean)
    ], ResourceCollaborator.prototype, "isCollaborator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=score" }),
        __metadata("design:type", String)
    ], ResourceCollaborator.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", userpublic_1.UserPublic)
    ], ResourceCollaborator.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userEmail" }),
        __metadata("design:type", String)
    ], ResourceCollaborator.prototype, "userEmail", void 0);
    return ResourceCollaborator;
}(utils_1.SpeakeasyBase));
exports.ResourceCollaborator = ResourceCollaborator;
