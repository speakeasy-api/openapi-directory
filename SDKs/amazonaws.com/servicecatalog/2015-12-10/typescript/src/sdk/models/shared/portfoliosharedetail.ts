/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DescribePortfolioShareTypeEnum } from "./describeportfoliosharetypeenum";
import { Expose } from "class-transformer";

/**
 * Information about the portfolio share.
 */
export class PortfolioShareDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Accepted" })
  accepted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "PrincipalId" })
  principalId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "SharePrincipals" })
  sharePrincipals?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "ShareTagOptions" })
  shareTagOptions?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "Type" })
  type?: DescribePortfolioShareTypeEnum;
}
