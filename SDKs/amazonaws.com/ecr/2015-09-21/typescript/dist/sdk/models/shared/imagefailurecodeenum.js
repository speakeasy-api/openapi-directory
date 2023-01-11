"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFailureCodeEnum = void 0;
var ImageFailureCodeEnum;
(function (ImageFailureCodeEnum) {
    ImageFailureCodeEnum["InvalidImageDigest"] = "InvalidImageDigest";
    ImageFailureCodeEnum["InvalidImageTag"] = "InvalidImageTag";
    ImageFailureCodeEnum["ImageTagDoesNotMatchDigest"] = "ImageTagDoesNotMatchDigest";
    ImageFailureCodeEnum["ImageNotFound"] = "ImageNotFound";
    ImageFailureCodeEnum["MissingDigestAndTag"] = "MissingDigestAndTag";
    ImageFailureCodeEnum["ImageReferencedByManifestList"] = "ImageReferencedByManifestList";
    ImageFailureCodeEnum["KmsError"] = "KmsError";
})(ImageFailureCodeEnum = exports.ImageFailureCodeEnum || (exports.ImageFailureCodeEnum = {}));
