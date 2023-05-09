# SDK

## Overview

The Docker DVP Data API allows [Docker Verified Publishers](https://docs.docker.com/docker-hub/publish/) to view image pull analytics data for their namespaces. Analytics data can be retrieved as raw data, or in a summary format.
  
#### Summary data

In your summary data CSV, you will have access to the data points listed below. You can request summary data for a complete week (Monday through Sunday) or for a complete month (available on the first day of the following month). 

There are two levels of summary data:

- Repository-level, a summary of every namespace and repository
- Tag- or digest-level, a summary of every namespace, repository, and reference
  (tag or digest)

 The summary data formats contain the following data points:

- Unique IP address count
- Pulls by tag count
- Pulls by digest count
- Version check count

#### Raw data

In your raw data CSV you will have access to the data points listed below. You can request raw data for a complete week (Monday through Sunday) or for a complete month (available on the first day of the following month). **Note:** each action is represented as a single row.

- Type (industry)
- Host (cloud provider)
- Country (geolocation)
- Timestamp
- Namespace
- Repository
- Reference (digest is always included, tag is provided when available)
- HTTP request method
- Action, one of the following:
  - Pull by tag
  - Pull by digest
  - Version check
- User-Agent


### Available Operations

