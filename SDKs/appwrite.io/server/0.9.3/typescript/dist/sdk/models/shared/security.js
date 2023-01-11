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
exports.SchemeProject = exports.SchemeLocale = exports.SchemeKey = exports.SchemeJwt = void 0;
var utils_1 = require("../../../internal/utils");
var SchemeJwt = /** @class */ (function (_super) {
    __extends(SchemeJwt, _super);
    function SchemeJwt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, name=X-Appwrite-JWT" }),
        __metadata("design:type", String)
    ], SchemeJwt.prototype, "apiKey", void 0);
    return SchemeJwt;
}(utils_1.SpeakeasyBase));
exports.SchemeJwt = SchemeJwt;
var SchemeKey = /** @class */ (function (_super) {
    __extends(SchemeKey, _super);
    function SchemeKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, name=X-Appwrite-Key" }),
        __metadata("design:type", String)
    ], SchemeKey.prototype, "apiKey", void 0);
    return SchemeKey;
}(utils_1.SpeakeasyBase));
exports.SchemeKey = SchemeKey;
var SchemeLocale = /** @class */ (function (_super) {
    __extends(SchemeLocale, _super);
    function SchemeLocale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, name=X-Appwrite-Locale" }),
        __metadata("design:type", String)
    ], SchemeLocale.prototype, "apiKey", void 0);
    return SchemeLocale;
}(utils_1.SpeakeasyBase));
exports.SchemeLocale = SchemeLocale;
var SchemeProject = /** @class */ (function (_super) {
    __extends(SchemeProject, _super);
    function SchemeProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, name=X-Appwrite-Project" }),
        __metadata("design:type", String)
    ], SchemeProject.prototype, "apiKey", void 0);
    return SchemeProject;
}(utils_1.SpeakeasyBase));
exports.SchemeProject = SchemeProject;
