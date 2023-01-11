import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BeezUpCommonUserErrorMessageArguments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Record<string, any>;
}


export class BeezUpCommonUserErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments", elemType: BeezUpCommonUserErrorMessageArguments })
  arguments?: BeezUpCommonUserErrorMessageArguments[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=cultureName" })
  cultureName?: string;

  @SpeakeasyMetadata({ data: "json, name=docUrl" })
  docUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
