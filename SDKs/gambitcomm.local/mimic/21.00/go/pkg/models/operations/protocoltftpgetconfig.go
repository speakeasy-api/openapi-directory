package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolTftpGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTftpGetConfigRequest struct {
	PathParams ProtocolTftpGetConfigPathParams
}

type ProtocolTftpGetConfigResponse struct {
	ConfigTFTP  *shared.ConfigTftp
	ContentType string
	StatusCode  int64
}
