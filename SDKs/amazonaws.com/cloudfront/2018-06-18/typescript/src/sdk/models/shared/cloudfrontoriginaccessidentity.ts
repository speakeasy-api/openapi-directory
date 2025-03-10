/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CloudFrontOriginAccessIdentityConfig } from "./cloudfrontoriginaccessidentityconfig";

/**
 * CloudFront origin access identity.
 */
export class CloudFrontOriginAccessIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  s3CanonicalUserId: string;
}
