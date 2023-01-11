import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExceptionDetail } from "./exceptiondetail";



export class ErrorSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorArguments" })
  errorArguments?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorGuid" })
  errorGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=exceptionDetail" })
  exceptionDetail?: ExceptionDetail;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyName" })
  propertyName?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyValue" })
  propertyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=technicalErrorMessage" })
  technicalErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=utcDate" })
  utcDate?: Date;
}
