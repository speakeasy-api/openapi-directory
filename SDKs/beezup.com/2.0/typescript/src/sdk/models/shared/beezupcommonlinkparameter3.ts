import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonParameterInEnum } from "./beezupcommonparameterinenum";
import { BeezUpCommonLovLink3 } from "./beezupcommonlovlink3";
import { BeezUpCommonLinkParameterProperty3 } from "./beezupcommonlinkparameterproperty3";
import { BeezUpCommonParameterTypeEnum } from "./beezupcommonparametertypeenum";



export class BeezUpCommonLinkParameter3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: BeezUpCommonParameterInEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=lovLink" })
  lovLink?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=lovRequired" })
  lovRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: BeezUpCommonLinkParameterProperty3 })
  properties?: Record<string, BeezUpCommonLinkParameterProperty3>;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BeezUpCommonParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Record<string, any>;
}
