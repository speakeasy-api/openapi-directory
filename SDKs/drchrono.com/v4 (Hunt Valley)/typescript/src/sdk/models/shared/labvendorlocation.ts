import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LabVendorLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facility_code" })
  facilityCode: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=vendor_name" })
  vendorName?: string;
}
