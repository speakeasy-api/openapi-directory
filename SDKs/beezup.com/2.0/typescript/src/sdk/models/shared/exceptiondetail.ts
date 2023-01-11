import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExceptionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=helpLink" })
  helpLink?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=stackTrace" })
  stackTrace?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
