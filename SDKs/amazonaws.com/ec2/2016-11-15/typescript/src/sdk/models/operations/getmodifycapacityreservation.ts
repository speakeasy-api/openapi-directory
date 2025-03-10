/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum GETModifyCapacityReservationActionEnum {
  ModifyCapacityReservation = "ModifyCapacityReservation",
}

/**
 * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p> <ul> <li> <p> <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not provide an <code>EndDate</code> value if <code>EndDateType</code> is <code>unlimited</code>.</p> </li> <li> <p> <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must provide an <code>EndDate</code> value if <code>EndDateType</code> is <code>limited</code>.</p> </li> </ul>
 */
export enum GETModifyCapacityReservationEndDateTypeEnum {
  Unlimited = "unlimited",
  Limited = "limited",
}

export enum GETModifyCapacityReservationVersionEnum {
  TwoThousandAndSixteen1115 = "2016-11-15",
}

export class GETModifyCapacityReservationRequest extends SpeakeasyBase {
  /**
   * Reserved. Capacity Reservations you have created are accepted by default.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Accept",
  })
  accept?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: GETModifyCapacityReservationActionEnum;

  /**
   * Reserved for future use.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=AdditionalInfo",
  })
  additionalInfo?: string;

  /**
   * The ID of the Capacity Reservation.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=CapacityReservationId",
  })
  capacityReservationId: string;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DryRun",
  })
  dryRun?: boolean;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to <code>expired</code> when it reaches its end date and time.</p> <p>The Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p> <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is <code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is <code>unlimited</code>.</p>
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=EndDate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  endDate?: Date;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p> <ul> <li> <p> <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not provide an <code>EndDate</code> value if <code>EndDateType</code> is <code>unlimited</code>.</p> </li> <li> <p> <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must provide an <code>EndDate</code> value if <code>EndDateType</code> is <code>limited</code>.</p> </li> </ul>
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=EndDateType",
  })
  endDateType?: GETModifyCapacityReservationEndDateTypeEnum;

  /**
   * The number of instances for which to reserve capacity. The number of instances can't be increased or decreased by more than <code>1000</code> in a single request.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=InstanceCount",
  })
  instanceCount?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: GETModifyCapacityReservationVersionEnum;

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

export class GETModifyCapacityReservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
