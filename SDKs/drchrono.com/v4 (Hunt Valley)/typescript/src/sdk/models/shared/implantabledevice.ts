import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImplantableDeviceStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class ImplantableDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=brand_name" })
  brandName?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration_date" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=gmdn_pt_name" })
  gmdnPtName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=manufacturing_date" })
  manufacturingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: string;

  @SpeakeasyMetadata({ data: "json, name=procedure" })
  procedure?: string;

  @SpeakeasyMetadata({ data: "json, name=serial_number" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ImplantableDeviceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=udi" })
  udi?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=version_or_model" })
  versionOrModel?: string;
}
