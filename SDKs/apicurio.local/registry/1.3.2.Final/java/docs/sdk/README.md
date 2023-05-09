# SDK

## Overview

Apicurio Registry is a datastore for standard event schemas and API designs. Apicurio Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.

The Apicurio Registry REST API enables client applications to manage the artifacts in the registry. This API provides create, read, update, and delete operations for schema and API artifacts, rules, versions, and metadata. 

The supported artifact types include:
- Apache Avro schema
- AsyncAPI specification
- Google protocol buffers (schema and file descriptor)
- GraphQL schema
- JSON Schema
- Kafka Connect schema
- OpenAPI specification
- Web Services Description Language
- XML Schema Definition


**Note**: The Apicurio Registry REST API is available from `http://MY-REGISTRY-URL/api`. You must prefix all API operation paths with `/api`, for example, `api/ids/{globalId}`.


### Available Operations

