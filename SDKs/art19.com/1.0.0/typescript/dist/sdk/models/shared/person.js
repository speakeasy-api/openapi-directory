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
exports.Person = exports.PersonRelationships = exports.PersonRelationshipsAvatar = exports.PersonAttributes = void 0;
var utils_1 = require("../../../internal/utils");
var resourceidentifier_1 = require("./resourceidentifier");
var PersonAttributes = /** @class */ (function (_super) {
    __extends(PersonAttributes, _super);
    function PersonAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avatar_id" }),
        __metadata("design:type", String)
    ], PersonAttributes.prototype, "avatarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=biography" }),
        __metadata("design:type", String)
    ], PersonAttributes.prototype, "biography", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=born" }),
        __metadata("design:type", Date)
    ], PersonAttributes.prototype, "born", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PersonAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=died" }),
        __metadata("design:type", Date)
    ], PersonAttributes.prototype, "died", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], PersonAttributes.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from_country" }),
        __metadata("design:type", String)
    ], PersonAttributes.prototype, "fromCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from_locality" }),
        __metadata("design:type", String)
    ], PersonAttributes.prototype, "fromLocality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from_region" }),
        __metadata("design:type", String)
    ], PersonAttributes.prototype, "fromRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], PersonAttributes.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_email" }),
        __metadata("design:type", String)
    ], PersonAttributes.prototype, "publicEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PersonAttributes.prototype, "updatedAt", void 0);
    return PersonAttributes;
}(utils_1.SpeakeasyBase));
exports.PersonAttributes = PersonAttributes;
// PersonRelationshipsAvatar
/**
 * The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
 *
**/
var PersonRelationshipsAvatar = /** @class */ (function (_super) {
    __extends(PersonRelationshipsAvatar, _super);
    function PersonRelationshipsAvatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], PersonRelationshipsAvatar.prototype, "data", void 0);
    return PersonRelationshipsAvatar;
}(utils_1.SpeakeasyBase));
exports.PersonRelationshipsAvatar = PersonRelationshipsAvatar;
var PersonRelationships = /** @class */ (function (_super) {
    __extends(PersonRelationships, _super);
    function PersonRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avatar" }),
        __metadata("design:type", PersonRelationshipsAvatar)
    ], PersonRelationships.prototype, "avatar", void 0);
    return PersonRelationships;
}(utils_1.SpeakeasyBase));
exports.PersonRelationships = PersonRelationships;
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", PersonAttributes)
    ], Person.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Person.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", PersonRelationships)
    ], Person.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Person.prototype, "type", void 0);
    return Person;
}(utils_1.SpeakeasyBase));
exports.Person = Person;
