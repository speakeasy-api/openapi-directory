import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vulnerability } from "./vulnerability";



export class DeviceInfoFirmwareInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=release_date" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sha2" })
  sha2?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class DeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cve_list", elemType: Vulnerability })
  cveList?: Vulnerability[];

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=firmware_info" })
  firmwareInfo?: DeviceInfoFirmwareInfo;

  @SpeakeasyMetadata({ data: "json, name=firmware_version" })
  firmwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=is_discontinued" })
  isDiscontinued?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latest_firmware_info" })
  latestFirmwareInfo?: DeviceInfoFirmwareInfo;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=model_name" })
  modelName?: string;
}
