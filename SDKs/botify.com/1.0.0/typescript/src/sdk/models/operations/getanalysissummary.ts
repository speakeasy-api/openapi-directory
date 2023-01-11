import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnalysisSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetAnalysisSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnalysisSummaryPathParams;
}


export class GetAnalysisSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analysisDetail?: shared.AnalysisDetail;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;
}
