/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum GETDisableTransitGatewayRouteTablePropagationActionEnum {
  DisableTransitGatewayRouteTablePropagation = "DisableTransitGatewayRouteTablePropagation",
}

export enum GETDisableTransitGatewayRouteTablePropagationVersionEnum {
  TwoThousandAndSixteen1115 = "2016-11-15",
}

export class GETDisableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: GETDisableTransitGatewayRouteTablePropagationActionEnum;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DryRun",
  })
  dryRun?: boolean;

  /**
   * The ID of the attachment.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId",
  })
  transitGatewayAttachmentId?: string;

  /**
   * The ID of the route table announcement.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableAnnouncementId",
  })
  transitGatewayRouteTableAnnouncementId?: string;

  /**
   * The ID of the propagation route table.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId",
  })
  transitGatewayRouteTableId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: GETDisableTransitGatewayRouteTablePropagationVersionEnum;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
  })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
  })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Credential",
  })
  xAmzCredential?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Date",
  })
  xAmzDate?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
  })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Signature",
  })
  xAmzSignature?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
  })
  xAmzSignedHeaders?: string;
}

export class GETDisableTransitGatewayRouteTablePropagationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
