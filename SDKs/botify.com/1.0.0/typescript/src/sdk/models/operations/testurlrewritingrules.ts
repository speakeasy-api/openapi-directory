import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestUrlRewritingRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TestUrlRewritingRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestUrlRewritingRulesPathParams;
}


export class TestUrlRewritingRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  urlRewritingRulesSerializer?: shared.UrlRewritingRulesSerializer;
}
