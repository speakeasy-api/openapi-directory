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
exports.ProjectStatusRequestInput = exports.ProjectStatusRequestColorEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ProjectStatusRequestColorEnum;
(function (ProjectStatusRequestColorEnum) {
    ProjectStatusRequestColorEnum["Green"] = "green";
    ProjectStatusRequestColorEnum["Yellow"] = "yellow";
    ProjectStatusRequestColorEnum["Red"] = "red";
    ProjectStatusRequestColorEnum["Blue"] = "blue";
})(ProjectStatusRequestColorEnum = exports.ProjectStatusRequestColorEnum || (exports.ProjectStatusRequestColorEnum = {}));
// ProjectStatusRequestInput
/**
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
var ProjectStatusRequestInput = /** @class */ (function (_super) {
    __extends(ProjectStatusRequestInput, _super);
    function ProjectStatusRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], ProjectStatusRequestInput.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_text" }),
        __metadata("design:type", String)
    ], ProjectStatusRequestInput.prototype, "htmlText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], ProjectStatusRequestInput.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProjectStatusRequestInput.prototype, "title", void 0);
    return ProjectStatusRequestInput;
}(utils_1.SpeakeasyBase));
exports.ProjectStatusRequestInput = ProjectStatusRequestInput;
