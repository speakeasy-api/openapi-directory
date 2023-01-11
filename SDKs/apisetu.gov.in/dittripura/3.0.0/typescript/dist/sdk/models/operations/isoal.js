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
exports.IsoalResponse = exports.IsoalRequest = exports.Isoal504ApplicationJson = exports.Isoal504ApplicationJsonErrorDescriptionEnum = exports.Isoal504ApplicationJsonErrorEnum = exports.Isoal503ApplicationJson = exports.Isoal503ApplicationJsonErrorDescriptionEnum = exports.Isoal503ApplicationJsonErrorEnum = exports.Isoal502ApplicationJson = exports.Isoal502ApplicationJsonErrorDescriptionEnum = exports.Isoal502ApplicationJsonErrorEnum = exports.Isoal500ApplicationJson = exports.Isoal500ApplicationJsonErrorDescriptionEnum = exports.Isoal500ApplicationJsonErrorEnum = exports.Isoal404ApplicationJson = exports.Isoal404ApplicationJsonErrorDescriptionEnum = exports.Isoal404ApplicationJsonErrorEnum = exports.Isoal401ApplicationJson = exports.Isoal401ApplicationJsonErrorDescriptionEnum = exports.Isoal401ApplicationJsonErrorEnum = exports.Isoal400ApplicationJson = exports.Isoal400ApplicationJsonErrorDescriptionEnum = exports.Isoal400ApplicationJsonErrorEnum = exports.IsoalSecurity = exports.IsoalRequestBody = exports.IsoalRequestBodyFormatEnum = exports.IsoalRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var IsoalRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IsoalRequestBodyCertificateParameters, _super);
    function IsoalRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], IsoalRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], IsoalRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return IsoalRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.IsoalRequestBodyCertificateParameters = IsoalRequestBodyCertificateParameters;
var IsoalRequestBodyFormatEnum;
(function (IsoalRequestBodyFormatEnum) {
    IsoalRequestBodyFormatEnum["Pdf"] = "pdf";
})(IsoalRequestBodyFormatEnum = exports.IsoalRequestBodyFormatEnum || (exports.IsoalRequestBodyFormatEnum = {}));
var IsoalRequestBody = /** @class */ (function (_super) {
    __extends(IsoalRequestBody, _super);
    function IsoalRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IsoalRequestBodyCertificateParameters)
    ], IsoalRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IsoalRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IsoalRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IsoalRequestBody.prototype, "txnId", void 0);
    return IsoalRequestBody;
}(utils_1.SpeakeasyBase));
exports.IsoalRequestBody = IsoalRequestBody;
var IsoalSecurity = /** @class */ (function (_super) {
    __extends(IsoalSecurity, _super);
    function IsoalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IsoalSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IsoalSecurity.prototype, "clientId", void 0);
    return IsoalSecurity;
}(utils_1.SpeakeasyBase));
exports.IsoalSecurity = IsoalSecurity;
var Isoal400ApplicationJsonErrorEnum;
(function (Isoal400ApplicationJsonErrorEnum) {
    Isoal400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Isoal400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Isoal400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Isoal400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Isoal400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Isoal400ApplicationJsonErrorEnum = exports.Isoal400ApplicationJsonErrorEnum || (exports.Isoal400ApplicationJsonErrorEnum = {}));
var Isoal400ApplicationJsonErrorDescriptionEnum;
(function (Isoal400ApplicationJsonErrorDescriptionEnum) {
    Isoal400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Isoal400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Isoal400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Isoal400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Isoal400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Isoal400ApplicationJsonErrorDescriptionEnum = exports.Isoal400ApplicationJsonErrorDescriptionEnum || (exports.Isoal400ApplicationJsonErrorDescriptionEnum = {}));
var Isoal400ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal400ApplicationJson, _super);
    function Isoal400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal400ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Isoal400ApplicationJson = Isoal400ApplicationJson;
var Isoal401ApplicationJsonErrorEnum;
(function (Isoal401ApplicationJsonErrorEnum) {
    Isoal401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Isoal401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Isoal401ApplicationJsonErrorEnum = exports.Isoal401ApplicationJsonErrorEnum || (exports.Isoal401ApplicationJsonErrorEnum = {}));
var Isoal401ApplicationJsonErrorDescriptionEnum;
(function (Isoal401ApplicationJsonErrorDescriptionEnum) {
    Isoal401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Isoal401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Isoal401ApplicationJsonErrorDescriptionEnum = exports.Isoal401ApplicationJsonErrorDescriptionEnum || (exports.Isoal401ApplicationJsonErrorDescriptionEnum = {}));
var Isoal401ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal401ApplicationJson, _super);
    function Isoal401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal401ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Isoal401ApplicationJson = Isoal401ApplicationJson;
var Isoal404ApplicationJsonErrorEnum;
(function (Isoal404ApplicationJsonErrorEnum) {
    Isoal404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Isoal404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Isoal404ApplicationJsonErrorEnum = exports.Isoal404ApplicationJsonErrorEnum || (exports.Isoal404ApplicationJsonErrorEnum = {}));
var Isoal404ApplicationJsonErrorDescriptionEnum;
(function (Isoal404ApplicationJsonErrorDescriptionEnum) {
    Isoal404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Isoal404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Isoal404ApplicationJsonErrorDescriptionEnum = exports.Isoal404ApplicationJsonErrorDescriptionEnum || (exports.Isoal404ApplicationJsonErrorDescriptionEnum = {}));
var Isoal404ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal404ApplicationJson, _super);
    function Isoal404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal404ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Isoal404ApplicationJson = Isoal404ApplicationJson;
var Isoal500ApplicationJsonErrorEnum;
(function (Isoal500ApplicationJsonErrorEnum) {
    Isoal500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Isoal500ApplicationJsonErrorEnum = exports.Isoal500ApplicationJsonErrorEnum || (exports.Isoal500ApplicationJsonErrorEnum = {}));
var Isoal500ApplicationJsonErrorDescriptionEnum;
(function (Isoal500ApplicationJsonErrorDescriptionEnum) {
    Isoal500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Isoal500ApplicationJsonErrorDescriptionEnum = exports.Isoal500ApplicationJsonErrorDescriptionEnum || (exports.Isoal500ApplicationJsonErrorDescriptionEnum = {}));
var Isoal500ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal500ApplicationJson, _super);
    function Isoal500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal500ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Isoal500ApplicationJson = Isoal500ApplicationJson;
var Isoal502ApplicationJsonErrorEnum;
(function (Isoal502ApplicationJsonErrorEnum) {
    Isoal502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Isoal502ApplicationJsonErrorEnum = exports.Isoal502ApplicationJsonErrorEnum || (exports.Isoal502ApplicationJsonErrorEnum = {}));
var Isoal502ApplicationJsonErrorDescriptionEnum;
(function (Isoal502ApplicationJsonErrorDescriptionEnum) {
    Isoal502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Isoal502ApplicationJsonErrorDescriptionEnum = exports.Isoal502ApplicationJsonErrorDescriptionEnum || (exports.Isoal502ApplicationJsonErrorDescriptionEnum = {}));
var Isoal502ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal502ApplicationJson, _super);
    function Isoal502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal502ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Isoal502ApplicationJson = Isoal502ApplicationJson;
var Isoal503ApplicationJsonErrorEnum;
(function (Isoal503ApplicationJsonErrorEnum) {
    Isoal503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Isoal503ApplicationJsonErrorEnum = exports.Isoal503ApplicationJsonErrorEnum || (exports.Isoal503ApplicationJsonErrorEnum = {}));
var Isoal503ApplicationJsonErrorDescriptionEnum;
(function (Isoal503ApplicationJsonErrorDescriptionEnum) {
    Isoal503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Isoal503ApplicationJsonErrorDescriptionEnum = exports.Isoal503ApplicationJsonErrorDescriptionEnum || (exports.Isoal503ApplicationJsonErrorDescriptionEnum = {}));
var Isoal503ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal503ApplicationJson, _super);
    function Isoal503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal503ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Isoal503ApplicationJson = Isoal503ApplicationJson;
var Isoal504ApplicationJsonErrorEnum;
(function (Isoal504ApplicationJsonErrorEnum) {
    Isoal504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Isoal504ApplicationJsonErrorEnum = exports.Isoal504ApplicationJsonErrorEnum || (exports.Isoal504ApplicationJsonErrorEnum = {}));
var Isoal504ApplicationJsonErrorDescriptionEnum;
(function (Isoal504ApplicationJsonErrorDescriptionEnum) {
    Isoal504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Isoal504ApplicationJsonErrorDescriptionEnum = exports.Isoal504ApplicationJsonErrorDescriptionEnum || (exports.Isoal504ApplicationJsonErrorDescriptionEnum = {}));
var Isoal504ApplicationJson = /** @class */ (function (_super) {
    __extends(Isoal504ApplicationJson, _super);
    function Isoal504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Isoal504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Isoal504ApplicationJson.prototype, "errorDescription", void 0);
    return Isoal504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Isoal504ApplicationJson = Isoal504ApplicationJson;
var IsoalRequest = /** @class */ (function (_super) {
    __extends(IsoalRequest, _super);
    function IsoalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", IsoalRequestBody)
    ], IsoalRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", IsoalSecurity)
    ], IsoalRequest.prototype, "security", void 0);
    return IsoalRequest;
}(utils_1.SpeakeasyBase));
exports.IsoalRequest = IsoalRequest;
var IsoalResponse = /** @class */ (function (_super) {
    __extends(IsoalResponse, _super);
    function IsoalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], IsoalResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], IsoalResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Isoal400ApplicationJson)
    ], IsoalResponse.prototype, "isoal400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Isoal401ApplicationJson)
    ], IsoalResponse.prototype, "isoal401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Isoal404ApplicationJson)
    ], IsoalResponse.prototype, "isoal404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Isoal500ApplicationJson)
    ], IsoalResponse.prototype, "isoal500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Isoal502ApplicationJson)
    ], IsoalResponse.prototype, "isoal502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Isoal503ApplicationJson)
    ], IsoalResponse.prototype, "isoal503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Isoal504ApplicationJson)
    ], IsoalResponse.prototype, "isoal504ApplicationJSONObject", void 0);
    return IsoalResponse;
}(utils_1.SpeakeasyBase));
exports.IsoalResponse = IsoalResponse;
