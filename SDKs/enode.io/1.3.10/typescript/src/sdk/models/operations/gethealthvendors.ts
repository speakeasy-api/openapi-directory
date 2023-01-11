import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetHealthVendors200ApplicationJsonStatusEnum {
    Ready = "READY",
    ElevatedErrorRate = "ELEVATED_ERROR_RATE",
    Outage = "OUTAGE"
}


// GetHealthVendors200ApplicationJson
/** 
 * Vendor status and metadata
**/
export class GetHealthVendors200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetHealthVendors200ApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum;
}


export class GetHealthVendorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetHealthVendors200ApplicationJson })
  getHealthVendors200ApplicationJSONObjects?: GetHealthVendors200ApplicationJson[];
}
